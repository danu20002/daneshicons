import React from 'react';

export const iconData = {
  id: "Annoyed",
  name: "Annoyed",
  category: "A",
  nodes: [["circle",{"cx":"12","cy":"12","r":"10"}],["path",{"d":"M8 15h8"}],["path",{"d":"M8 9h2"}],["path",{"d":"M14 9h2"}]]
};

export const Annoyed = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M8 15h8" />
      <path d="M8 9h2" />
      <path d="M14 9h2" />
      {children}
    </svg>
  );
});

export default Annoyed;
