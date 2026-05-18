import React from 'react';

export const iconData = {
  id: "Lasso",
  name: "Lasso",
  category: "L",
  nodes: [["path",{"d":"M3.704 14.467a10 8 0 1 1 3.115 2.375"}],["path",{"d":"M7 22a5 5 0 0 1-2-3.994"}],["circle",{"cx":"5","cy":"16","r":"2"}]]
};

export const Lasso = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
      <path d="M3.704 14.467a10 8 0 1 1 3.115 2.375" />
      <path d="M7 22a5 5 0 0 1-2-3.994" />
      <circle cx="5" cy="16" r="2" />
      {children}
    </svg>
  );
});

export default Lasso;
