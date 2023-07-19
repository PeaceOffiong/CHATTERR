import React, { useRef } from "react";
import { AiOutlineLeftCircle } from "react-icons/ai";

type EmailConfirmProps = {
    showEmailConfirm: boolean;
    confirmCode: string[];
    setConfirmCode: React.Dispatch<React.SetStateAction<string[]>>;
};

const EmailConfirm: React.FC<EmailConfirmProps> = ({
    showEmailConfirm,
    confirmCode,
    setConfirmCode,
}) => {
    const inputRefs = useRef<HTMLInputElement[]>([]);

    const handleInputChange = (
        index: number,
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { value } = event.target;
        const newInputValue = [...confirmCode];
        newInputValue[index] = value;
        setConfirmCode(newInputValue);

        if (value.length === 1 && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1]!.focus(); // Non-null assertion operator
        }
    };

    return (
        <>
            <div
                className={`z-10 sm:w-3/4 w-full flex ease-linear gap-4 h-full bg-white absolute top-0 bottom-0 flex items-center justify-center text-center flex-col ${showEmailConfirm ? "" : "hidden"
                    }`}
            >
                <div className="absolute left-0 top-0 flex items-center justify-center py-4 text-2xl gap-2">
                    <AiOutlineLeftCircle /> <small>Back</small>
                </div>
                <h2 className="text-3xl">Enter confirmation code</h2>
                <p>We emailed you a code. Please input the code here for account verification</p>
                <div className="flex items-center justify-center gap-4">
                    {[0, 1, 2, 3].map((index) => (
                        <input
                            className="h-20 w-20 border border-grey-100 rounded-xl"
                            type="number"
                            key={index}
                            maxLength={1}
                            ref={(el) => (inputRefs.current[index] = el!)} // Non-null assertion operator
                            value={confirmCode[index]}
                            onChange={(event) => handleInputChange(index, event)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default EmailConfirm;
