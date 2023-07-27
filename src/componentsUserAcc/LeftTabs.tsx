import React from "react";
import { ReactNode } from "react";

type Props = {
    icons: ReactNode,
    name: string,
}

const LeftTabs: React.FC<Props> = ({ icons, name }) => {
    return (
        <section className="flex items-center items-center h-6">
            <div>{icons}</div>
            <h4>{name}</h4>
        </section>
    )
}

export default LeftTabs