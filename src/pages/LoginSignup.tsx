import Head from "next/head";
import { Navbar, EmailConfirm, Login, SignUp } from "../components";
import Link from "next/link";
import { useGlobalContext } from "../context/globalContext";
import { REDUCER_ACTION_TYPE } from "../reducers/actions";
import { formValidations } from "../customHooks/formValidation";
import { useState } from "react";
import { useUserAuthContext, CurrentUserProps } from "@/context/UserAuthContext";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from "../firebase/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import emailjs from 'emailjs-com';
import { NextRouter, useRouter } from "next/router";


emailjs.init('service_pgfq8lm');


const LoginSignup = () => {
  const { state, dispatch } = useGlobalContext();
  const { dataState } = useUserAuthContext();
  const { usersData, currentUser } = dataState;
  const [loginTab, setloginTab] = useState<boolean>(false);
  const [signUpTab, setSignUpTab] = useState<boolean>(true);
  const [showEmailConfirm, setShowEmailConfirm] = useState<boolean>(false);
  const [confirmCode, setConfirmCode] = useState<string[]>(["", "", "", ""]);
  const [resendCode, setResendCode] = useState<boolean>(false);
  const {
    firstName,
    lastName,
    email,
    confirmPassword,
    password,
    errors,
  } = state;
  const [generatedCode, setGeneratedCode] = useState<string>("");
 const router: NextRouter = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const isFormInValid = formValidations(
      dispatch,
      usersData,
      email,
      password,
      confirmPassword,
    );

    if (isFormInValid === true) {
      console.log(isFormInValid);
    } else if (isFormInValid === false) {
      const Person = {
        email,
        firstName,
        lastName,
        password,
        fullName: `${firstName} ${lastName}`,
        interests: [],
        Blogs: {},
        followers: {
          number: []
        },

      };

      signInWithEmail(Person)
      setShowEmailConfirm(true);
    }
  };

  const signInWithEmail = async (person: CurrentUserProps) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, person.email, person.password);
      const user = userCredential.user;
      const userRef = doc(db, 'Users', user.uid);
      await setDoc(userRef, {
        firstName: person.firstName,
        lastName: person.lastName,
        fullName: person.fullName,
        interests: person.interests,
        Blogs: person.Blogs,
        followers: {
          number: person.followers.number
        }
      })
      await sendVerificationCode(person.email);
      dispatch({ type: REDUCER_ACTION_TYPE.UPDATE_CURRENT_USER, payload:person });
      setShowEmailConfirm(true);
    } catch (error) {
      console.error("failed to sign in")
    }
  }

  const generateVerificationCode = () => {
    const min = 1000;
    const max = 9999;
    const verificationCode = Math.floor(Math.random() * (max - min + 1) + min).toString();

    setGeneratedCode(verificationCode);
    return verificationCode.toString(); 
  };

  const sendVerificationCode = async (email: string) => {
    try {

      const verificationCode = generateVerificationCode();

      const mailOptions = {
        from: 'peaceyben@gmail.com',
        to: email,
        subject: 'Verification Code for Chatter',
        text: `Your verification code is: ${verificationCode}`,
      };

      const response = await emailjs.send('service_pgfq8lm', "template_syfsuid", mailOptions)
      setTimeout(() => {
      setResendCode(true)
      }, 60000)
      console.log('Verification code sent successfully', response);
    } catch (error) {
      console.error('Error sending verification code:', error);   
    }
  };

  const verifyCode = async (Arraycode: (any)[]) => {
    let code = "";
    for (let i = 0; i < Arraycode.length; i++) {
      code += Arraycode[i];
    }
    if (code === generatedCode) {
      if (currentUser.length > 0){
        router.push(`/${currentUser[0].firstName}${currentUser[0].lastName}`);
        console.log("Email verified")
      }
    } else {
      dispatch({type: REDUCER_ACTION_TYPE.UPDATE_ERROR_CONFIRM_EMAIL, payload:"Code Incorrect"} )
    }
  }


  return (
    <section
      style={{ fontFamily: "DM Sans, sans-serif" }}
      className="md:h-screen md:overflow-hidden h-full"
    >
      <div className="fixed top-0 left-0 right-0 z-10 md:hidden">
        <Navbar />
      </div>

      <div className="h-full flex flex-col md:flex-row md:h-screen">
        <Head>
          <title>Login CHATTER</title>
          <meta name="description" content="Bookworm’s heaven" />
          <link
            rel="icon"
            href="https://res.cloudinary.com/du8oaagwi/image/upload/v1686066271/favicon_nmm0r9.png"
          />
        </Head>
        <div
          style={{
            backgroundImage: `url("https://res.cloudinary.com/du8oaagwi/image/upload/v1686066266/ChatterImg_ev0xcp.svg")`
          }}
          className="relative w-full md:w-2/5 h-screen md:h-full bg-cover bg-no-repeat bg-center "
        >

          <div className="absolute inset-0 h-full bg-black bg-opacity-30 text-white flex items-center justify-center flex-col">
            <h1 className={`tracking-wider text-3xl leading-loose`}>
              <b className="uppercase">chatter</b>
            </h1>
            <p className="w-4/5 leading-relaxed ">
              Unleash the Power of Words, Connect with Like-minded Readers and
              Writers
            </p>
            <ul className="flex gap-5 p-2.5 md:hidden ">
              <li className="cursor-pointer h-10 flex items-center justify-center border-2 border-blue-700 w-28 rounded-md ">
                <Link href="#formSection">Log in</Link>
              </li>
              <li className="cursor-pointer h-10 flex items-center justify-center w-28 bg-blue-700  rounded-md capitalize text-white">
                <Link href="#formSection">Sign up</Link>
              </li>
            </ul>
          </div>
        </div>

        <section
          className="w-full h-full  md:w-3/5 md:h-screen flex flex-col items-center py-4 overflow-hidden relative"
          id="formSection"
        >
          <div className="h-10 flex flex-col justify-evenly sm:w-3/4 w-4/5 relative">
              <div className="flex flex-row text-sm cursor-pointer">
                <p
                  className="uppercase w-1/2"
                  onClick={() => {
                    setloginTab(false), setSignUpTab(true);
                  }}
                >
                  <b>Register</b>
                </p>
                <p
                  className="uppercase w-1/2 text-right"
                  onClick={() => {
                    setloginTab(true), setSignUpTab(false);
                  }}
                >
                  <b className="">Login</b>
                </p>
              </div>

              <div className={`h-1.5 w-full rounded-3xl flex bg-gray-200`}>
                <div
                  className={`w-1/2 h-full rounded-3xl ${signUpTab ? "bg-blue-700" : ""
                    }`}
                ></div>
                <div
                  className={`w-1/2 h-full rounded-3xl ${loginTab ? "bg-blue-700" : ""
                    }`}
                ></div>
              </div>
          </div>
          <div className="w-full flex items-center flex-col h-screen">          
            <div className="relative sm:w-3/4 w-full flex ease-linear gap-10 h-full">
              <SignUp signUpTab={signUpTab} handleSubmit={handleSubmit} />
              <Login loginTab={loginTab} />
            </div>
          </div>
          <EmailConfirm showEmailConfirm={showEmailConfirm} confirmCode={confirmCode} setConfirmCode={setConfirmCode} setShowEmailConfirm={setShowEmailConfirm}
            verifyCode={verifyCode} resendCode={ resendCode} />
        </section>
      </div>
    </section>
  );
};

export default LoginSignup;
