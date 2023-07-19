import { InputForm } from "../components";
import { useGlobalContext } from "../context/globalContext";
import { REDUCER_ACTION_TYPE } from "../reducers/actions";

type loginTabProps = {
    loginTab: boolean
}

const Login:React.FC<loginTabProps> = ({loginTab}) => {
    const { state, dispatch } = useGlobalContext();
    const {
        loginEmail,
        loginPassword, 
        errors
    } = state;

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
    return (
        <>
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
            </div></>
    )
}

export default Login