import React from "react";
import { ReactNode } from "react";

type Props = {
    icons: ReactNode,
    name: string,
}

const LeftTabs: React.FC<Props> = ({ icons, name }) => {
    return (
        <section className="flex items-center  h-8 gap-2 pl-4 w-auto cursor-pointer">
            <div>{icons}</div>
            <h4 className="text-sm ">{name}</h4>
        </section>
    )
}

export default LeftTabs;