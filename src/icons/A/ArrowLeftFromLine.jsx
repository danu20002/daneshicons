import React from 'react';

export const iconData = {
  id: "ArrowLeftFromLine",
  name: "ArrowLeftFromLine",
  category: "A",
  nodes: [["path",{"d":"m9 6-6 6 6 6"}],["path",{"d":"M3 12h14"}],["path",{"d":"M21 19V5"}]]
};

export const ArrowLeftFromLine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="m9 6-6 6 6 6" />
      <path d="M3 12h14" />
      <path d="M21 19V5" />
      {children}
    </svg>
  );
});

export default ArrowLeftFromLine;
