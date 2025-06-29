import React from "react";
interface TemplateProps {
  children: React.ReactNode;
}

const Template: React.FC<TemplateProps> = ({ children }: TemplateProps) => {
  return <div className="flex justify-center p-6 h-screen">{children}</div>;
};

export default Template;
