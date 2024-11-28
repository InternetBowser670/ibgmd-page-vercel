import React, { ReactNode } from "react"

interface CircleImageWrapperProps {
    children: ReactNode;
}

export default function ImgCircle({ children }: CircleImageWrapperProps) {
    return (
        <div className="flex flex-wrap gap-4 justify-center items-center">
        {React.Children.map(children, (child) => (
            <div className="overflow-hidden rounded-full w-32 h-32 flex items-center justify-center">
                {child}
            </div>
        ))}
    </div>
    )
}