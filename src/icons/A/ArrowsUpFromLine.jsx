import React from 'react';

export const iconData = {
  id: "ArrowsUpFromLine",
  name: "ArrowsUpFromLine",
  category: "A",
  nodes: [["path",{"d":"m4 6 3-3 3 3"}],["path",{"d":"M7 17V3"}],["path",{"d":"m14 6 3-3 3 3"}],["path",{"d":"M17 17V3"}],["path",{"d":"M4 21h16"}]]
};

export const ArrowsUpFromLine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="m4 6 3-3 3 3" />
      <path d="M7 17V3" />
      <path d="m14 6 3-3 3 3" />
      <path d="M17 17V3" />
      <path d="M4 21h16" />
      {children}
    </svg>
  );
});

export default ArrowsUpFromLine;
