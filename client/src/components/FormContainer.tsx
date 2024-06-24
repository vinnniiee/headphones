import React from "react";

const FormContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`flex flex-col max-w-lg justify-center items-center gap-4 w-full ${className}`}
    >
      {children}
    </div>
  );
};

export default FormContainer;
