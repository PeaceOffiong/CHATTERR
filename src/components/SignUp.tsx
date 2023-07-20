import { useGlobalContext } from "@/context/globalContext";
import { InputForm } from "../components";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
import { REDUCER_ACTION_TYPE } from "../reducers/actions";
import { useUserAuthContext } from "@/context/UserAuthContext";

type signUpProps = {
    signUpTab: boolean;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const SignUp: React.FC<signUpProps> = ({ signUpTab, handleSubmit }) => {
    const { state, dispatch } = useGlobalContext();
    const { firstName,
        lastName,
        email,
        confirmPassword,
        password,
        JoinMethod, errors
    } = state;
    const { handleGoogleSignUp, dataState } = useUserAuthContext();

    const handleEmail = (e: React.FormEvent<HTMLInputElement>): void =>
        dispatch({
            type: REDUCER_ACTION_TYPE.UPDATE_EMAIL,
            payload: (e.target as HTMLInputElement).value
        });

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

    const handleJoinMethod = (e: any): void =>
        dispatch({
            type: REDUCER_ACTION_TYPE.UPDATE_JOIN_METHOD,
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

    return (
        <>
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
                            <div className="border-grey-500 gap-3 flex items-center justify-center border-2 p-4 rounded-md h-12 w-full cursor-pointer " onClick={handleGoogleSignUp}>
                                <FcGoogle className="text-2xl" />
                                <p>Sign up with Google</p>
                            </div>
                            <div className="border-grey-500 gap-3 flex items-center justify-center border-2 p-4 rounded-md h-12 w-full cursor-pointer ">
                                <FaLinkedin className="text-2xl" />
                                <p>Sign up with Linked In</p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
export default SignUp