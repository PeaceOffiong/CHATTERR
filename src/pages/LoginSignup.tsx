import Head from "next/head";
import { Navbar, InputForm } from "../components";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
import { useGlobalContext } from "../context/globalContext";
import { REDUCER_ACTION_TYPE } from "../reducers/actions";
import { formValidations } from "../customHooks/formValidation";
import { useState } from "react";

const LoginSignup = () => {
  const { state, dispatch } = useGlobalContext();
  const [loginTab, setloginTab] = useState(false);
  const [signUpTab, setSignUpTab] = useState(true);
  const {
    firstName,
    lastName,
    email,
    confirmPassword,
    password,
    loginEmail,
    loginPassword,
    JoinMethod,
    errors
  } = state;

  //Form onChange Functions
  const handleFirstName = (e: React.FormEvent<HTMLInputElement>): void =>
    dispatch({
      type: REDUCER_ACTION_TYPE.UPDATE_FIRSTNAME,
      payload: (e.target as HTMLInputElement).value
    });

  const handleLastName = (e: React.FormEvent<HTMLInputElement>): void =>
    dispatch({
      type: REDUCER_ACTION_TYPE.UPDATE_LASTNAME,
      payload: (e.target as HTMLInputElement).value
    });

  const handleEmail = (e: React.FormEvent<HTMLInputElement>): void =>
    dispatch({
      type: REDUCER_ACTION_TYPE.UPDATE_EMAIL,
      payload: (e.target as HTMLInputElement).value
    });

  const handlePassword = (e: React.FormEvent<HTMLInputElement>): void =>
    dispatch({
      type: REDUCER_ACTION_TYPE.UPDATE_PASSWORD,
      payload: (e.target as HTMLInputElement).value
    });

  const handleConfirmPassword = (e: React.FormEvent<HTMLInputElement>): void =>
    dispatch({
      type: REDUCER_ACTION_TYPE.UPDATE_CONFRIM_PASSWORD,
      payload: (e.target as HTMLInputElement).value
    });

  const handleLoginPassword = (e: React.FormEvent<HTMLInputElement>): void =>
    dispatch({
      type: REDUCER_ACTION_TYPE.UPDATE_LOGIN_PASSWORD,
      payload: (e.target as HTMLInputElement).value
    });

  const handleLoginEmail = (e: React.FormEvent<HTMLInputElement>): void =>
    dispatch({
      type: REDUCER_ACTION_TYPE.UPDATE_LOGIN_EMAIL,
      payload: (e.target as HTMLInputElement).value
    });

  const handleJoinMethod = (e): void =>
    dispatch({
      type: REDUCER_ACTION_TYPE.UPDATE_JOIN_METHOD,
      payload: (e.target as HTMLInputElement).value
    });

  //Form Validations
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const isFormInValid = formValidations(
      dispatch,
      email,
      password,
      confirmPassword
    );

    if (isFormInValid === true) {
      console.log(isFormInValid);
    } else if (isFormInValid === false) {
      const Person = {
        firstName,
        lastName,
        password,
        confirmPassword
      };
    }
  };

  return (
    <section
      style={{ fontFamily: "DM Sans, sans-serif" }}
      className="md:h-screen md:overflow-hidden"
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
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans&family=Dancing+Script:wght@600;700&family=Playfair+Display:ital,wght@0,600;1,400&family=Poppins:wght@300&display=swap"
            rel="stylesheet"
          />
        </Head>
        <div
          style={{
            backgroundImage: `url("https://res.cloudinary.com/du8oaagwi/image/upload/v1686066266/ChatterImg_ev0xcp.svg")`
          }}
          className="relative w-full md:w-2/5 h-screen md:h-full bg-cover bg-no-repeat bg-center "
        >
          {/*Starts Here*/}

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
          className="w-full md:w-3/5 h-screen  flex flex-col items-center py-4 overflow-hidden"
          id="formSection"
        >
          <div className="w-full flex items-center flex-col h-full">
            {/*Switch Forms Navigation  */}
            <div className="h-10 flex flex-col justify-evenly sm:w-3/4 w-4/5">
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
                  className={`w-1/2 h-full rounded-3xl ${
                    signUpTab ? "bg-blue-700" : ""
                  }`}
                ></div>
                <div
                  className={`w-1/2 h-full rounded-3xl ${
                    loginTab ? "bg-blue-700" : ""
                  }`}
                ></div>
              </div>
            </div>

            {/*Form Section*/}
            <div className="relative sm:w-3/4 w-full flex ease-linear gap-10 h-full">
              {/*Login */}
              <div
                className="absolute left--450 w-full flex flex-col"
                style={signUpTab ? { left: 0 } : { left: -750 }}
              >
                <form className="m-4 md:m-0" onSubmit={handleSubmit}>
                  <h2 className="text-3xl text-center py-2">
                    <b>Register as a Writer</b>
                  </h2>

                  <div className="flex flex-col md:flex-row gap-2 w-full ">
                    <InputForm
                      type="text"
                      name="firstName"
                      label="First Name"
                      placeholder="Jane"
                      onChange={handleFirstName}
                      value={firstName}
                      errorMessage={errors.FirstName}
                    />
                    <InputForm
                      type="text"
                      name="lastName"
                      label="Last Name"
                      placeholder="Doe"
                      value={lastName}
                      onChange={handleLastName}
                      errorMessage={errors.LastName}
                    />
                  </div>

                  <div className="flex flex-col gap-2 w-full">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="joiningType">
                        You are joining us as a?
                      </label>
                      <select
                        name="joiningType"
                        className="border-grey-500 border-2 rounded-md px-4 h-10 w-full "
                        value={JoinMethod}
                        onChange={handleJoinMethod}
                      >
                        <option value="Writer" className="p-4">
                          Writer
                        </option>
                        <option value="Reader" className="p-4">
                          Reader
                        </option>
                      </select>
                    </div>
                    <InputForm
                      type="email"
                      name="email"
                      label="Email"
                      placeholder="Janedoe@gmail.com"
                      onChange={handleEmail}
                      value={email}
                      errorMessage={errors.Email}
                    />{" "}
                    <InputForm
                      type="password"
                      name="password"
                      label="Password"
                      placeholder="..........."
                      onChange={handlePassword}
                      value={password}
                      errorMessage={errors.Password}
                    />{" "}
                    <InputForm
                      type="password"
                      name="confirmPassword"
                      label="ConfirmPassword"
                      placeholder="............ "
                      onChange={handleConfirmPassword}
                      value={confirmPassword}
                      errorMessage={errors.ConfirmPassword}
                    />
                    <div className="flex flex-col gap-2">
                      <input
                        type="submit"
                        value="Create Account"
                        className="cursor-pointer h-12 w-full bg-blue-700 rounded-md capitalize text-white self-start"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="border-grey-500 gap-3 flex items-center justify-center border-2 p-4 rounded-md h-12 w-full ">
                        <FcGoogle className="text-2xl" />
                        <p>Sign up with Google</p>
                      </div>
                      <div className="border-grey-500 gap-3 flex items-center justify-center border-2 p-4 rounded-md h-12 w-full ">
                        <FaLinkedin className="text-2xl" />
                        <p>Sign up with Linked In</p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              {/* Login Page*/}
              <div
                className={`absolute left-400 w-full flex `}
                style={loginTab ? { left: 0 } : { left: 750 }}
              >
                <form className=" w-full m-4 md:m-0">
                  <h2 className="text-3xl text-center py-10">
                    <b>Welcome back</b>
                  </h2>
                  <div className="flex flex-col gap-3 w-full">
                    <InputForm
                      type="email"
                      label="Email"
                      name="Email address"
                      placeholder="Janedoe@gmail.com"
                      onChange={handleLoginEmail}
                      value={loginEmail}
                      errorMessage={errors.Email}
                    />
                    <InputForm
                      type="password"
                      name="Password"
                      label="Password"
                      placeholder="..........."
                      onChange={handleLoginPassword}
                      value={loginPassword}
                      errorMessage={errors.Password}
                    />
                    <div className="flex flex-col gap-2">
                      <input
                        type="submit"
                        value="Login"
                        className="cursor-pointer h-12 w-full bg-blue-700 rounded-md capitalize text-white self-start"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default LoginSignup;
