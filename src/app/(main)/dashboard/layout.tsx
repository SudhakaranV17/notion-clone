import React from "react";

interface LayoutPrope {
  children: React.ReactNode;
  params: any;
}

const layout: React.FC<LayoutPrope> = ({ children, params }) => {
  return <main className="flex h-screen overflow-hidden">{children}</main>;
};

export default layout;
