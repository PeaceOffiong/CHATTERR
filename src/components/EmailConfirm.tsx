import React, { useEffect, useRef, useState} from "react";
import { AiOutlineLeftCircle } from "react-icons/ai";
import { useGlobalContext } from "@/context/globalContext";

type EmailConfirmProps = {
    showEmailConfirm: boolean;
    confirmCode: (any)[];
    setConfirmCode: React.Dispatch<React.SetStateAction<string[]>>;
    setShowEmailConfirm: React.Dispatch<React.SetStateAction<boolean>>;
    verifyCode: (Arraycode: any[]) => void;
    resendCode: boolean;
    handleResendcode: () => void;
};

const EmailConfirm: React.FC<EmailConfirmProps> = ({
    showEmailConfirm,
    confirmCode,
    setConfirmCode,
    setShowEmailConfirm,
    verifyCode,
    resendCode,
    handleResendcode
}) => {
    const inputRefs = useRef<HTMLInputElement[]>([]);
    const { state } = useGlobalContext();
    const { errors } = state;
    const [resendCodeMsg, setResendcodeMsg] = useState<string>("");

    useEffect(() => {
        setTimeout(() => {
            setResendcodeMsg("Resend Code")
        }, 5000)
    }, [])

    const handleInputChange = (
        index: number,
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { value } = event.target;
        const newInputValue = [...confirmCode];
        newInputValue[index] = value;
        setConfirmCode(newInputValue);

        if (value.length === 1 && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1]!.focus(); 
        }
    };

    return (
        <>
            <div
                className={`z-10 sm:w-3/4 w-full flex ease-linear gap-4 h-full bg-white absolute top-0 bottom-0 flex items-center justify-center text-center flex-col px-2.5 sm:p-0 ${showEmailConfirm ? "" : "hidden"
                    }`}
            >
                <div className="absolute left-0 top-0 flex items-center justify-center py-4 text-2xl gap-2 cursor-pointer " onClick={() => setShowEmailConfirm(false)}>
                    <AiOutlineLeftCircle /> <small>Back</small>
                </div>
                <small className="text-red-700">{errors.confirmEmail}</small>
                <h2 className="text-3xl">Enter confirmation code</h2>
                <p>We emailed you a code. Please input the code here for account verification</p>
                <div className="flex items-center justify-center  flex-row gap-4">
                    {[0, 1, 2, 3].map((index) => (
                        <input
                            className="h-20 w-20 border border-grey-100 rounded-xl flex items-center justify-center text-2xl text-center"
                            type="number"
                            key={index}
                            maxLength={1}
                            ref={(el) => (inputRefs.current[index] = el!)} // Non-null assertion operator
                            value={confirmCode[index]}
                            onChange={(event) => handleInputChange(index, event)}
                        />
                    ))}
                </div>
                <div className="flex flex-col gap-2">
                    <input
                        type="submit"
                        value="Create Account"
                        className="cursor-pointer h-12 w-96 bg-blue-700 rounded-md capitalize text-white self-start"
                        onClick={() => verifyCode(confirmCode)}
                    />
                </div>
                <p>{resendCode ? "Click Below" : " Can't find Your code after checking your spam? you will be able to resend code in a minute"}</p>
                {resendCode && <p onClick={handleResendcode} className="cursor-pointer text-blue-700 text-sm underline">{ resendCodeMsg}</p>}
            </div>
        </>
    );
};

export default EmailConfirm;
