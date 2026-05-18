import React from 'react';

export const iconData = {
  id: "Music3",
  name: "Music3",
  category: "M",
  nodes: [["circle",{"cx":"12","cy":"18","r":"4"}],["path",{"d":"M16 18V2"}]]
};

export const Music3 = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="12" cy="18" r="4" />
      <path d="M16 18V2" />
      {children}
    </svg>
  );
});

export default Music3;
