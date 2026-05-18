import React from 'react';

export const iconData = {
  id: "Transgender",
  name: "Transgender",
  category: "T",
  nodes: [["path",{"d":"M12 16v6"}],["path",{"d":"M14 20h-4"}],["path",{"d":"M18 2h4v4"}],["path",{"d":"m2 2 7.17 7.17"}],["path",{"d":"M2 5.355V2h3.357"}],["path",{"d":"m22 2-7.17 7.17"}],["path",{"d":"M8 5 5 8"}],["circle",{"cx":"12","cy":"12","r":"4"}]]
};

export const Transgender = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M12 16v6" />
      <path d="M14 20h-4" />
      <path d="M18 2h4v4" />
      <path d="m2 2 7.17 7.17" />
      <path d="M2 5.355V2h3.357" />
      <path d="m22 2-7.17 7.17" />
      <path d="M8 5 5 8" />
      <circle cx="12" cy="12" r="4" />
      {children}
    </svg>
  );
});

export default Transgender;
