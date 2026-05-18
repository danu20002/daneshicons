import React from 'react';

export const iconData = {
  id: "Heading4",
  name: "Heading4",
  category: "H",
  nodes: [["path",{"d":"M12 18V6"}],["path",{"d":"M17 10v3a1 1 0 0 0 1 1h3"}],["path",{"d":"M21 10v8"}],["path",{"d":"M4 12h8"}],["path",{"d":"M4 18V6"}]]
};

export const Heading4 = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M12 18V6" />
      <path d="M17 10v3a1 1 0 0 0 1 1h3" />
      <path d="M21 10v8" />
      <path d="M4 12h8" />
      <path d="M4 18V6" />
      {children}
    </svg>
  );
});

export default Heading4;
