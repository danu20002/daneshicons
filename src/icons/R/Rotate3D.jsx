import React from 'react';

export const iconData = {
  id: "Rotate3d",
  name: "Rotate3d",
  category: "R",
  nodes: [["path",{"d":"m15.194 13.707 3.814 1.86-1.86 3.814"}],["path",{"d":"M16.47214 7.52786 A 5 10 0 1 0 13 21.79796"}],["path",{"d":"M21.79796 11 A 10 5 0 1 0 19 15.57071"}]]
};

export const Rotate3d = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="m15.194 13.707 3.814 1.86-1.86 3.814" />
      <path d="M16.47214 7.52786 A 5 10 0 1 0 13 21.79796" />
      <path d="M21.79796 11 A 10 5 0 1 0 19 15.57071" />
      {children}
    </svg>
  );
});

export default Rotate3d;
