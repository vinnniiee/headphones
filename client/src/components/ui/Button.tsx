import React from "react";

const Button = ({
  children,
  className,
  type=undefined,
  disabled
}: {
  children: React.ReactNode;
  className?: string;
  type?:"submit" | "reset" | "button" | undefined;
  disabled?:boolean;
}) => {
  return (
    <button
    type={type}  disabled={disabled}
    className={`p-2 bg-black px-4 text-white rounded-sm text-sm ${className}`}
    >
      <p className="mt-0.5">{children}</p>
    </button>
  );
};

export default Button;
