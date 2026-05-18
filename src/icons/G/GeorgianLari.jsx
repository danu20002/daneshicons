import React from 'react';

export const iconData = {
  id: "GeorgianLari",
  name: "GeorgianLari",
  category: "G",
  nodes: [["path",{"d":"M11.5 21a7.5 7.5 0 1 1 7.35-9"}],["path",{"d":"M13 12V3"}],["path",{"d":"M4 21h16"}],["path",{"d":"M9 12V3"}]]
};

export const GeorgianLari = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M11.5 21a7.5 7.5 0 1 1 7.35-9" />
      <path d="M13 12V3" />
      <path d="M4 21h16" />
      <path d="M9 12V3" />
      {children}
    </svg>
  );
});

export default GeorgianLari;
