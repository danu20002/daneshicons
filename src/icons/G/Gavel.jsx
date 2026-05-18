import React from 'react';

export const iconData = {
  id: "Gavel",
  name: "Gavel",
  category: "G",
  nodes: [["path",{"d":"m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381"}],["path",{"d":"m16 16 6-6"}],["path",{"d":"m21.5 10.5-8-8"}],["path",{"d":"m8 8 6-6"}],["path",{"d":"m8.5 7.5 8 8"}]]
};

export const Gavel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381" />
      <path d="m16 16 6-6" />
      <path d="m21.5 10.5-8-8" />
      <path d="m8 8 6-6" />
      <path d="m8.5 7.5 8 8" />
      {children}
    </svg>
  );
});

export default Gavel;
