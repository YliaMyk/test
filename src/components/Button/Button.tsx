import React, { MouseEventHandler, ReactNode } from "react";

interface IButton {
    children: ReactNode,
    onClick: MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<IButton> = (props: IButton) => {
    const { children, onClick } = props;

    return (
        <button onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;
