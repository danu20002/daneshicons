import React from 'react';

export const iconData = {
  id: "PoundSterling",
  name: "PoundSterling",
  category: "P",
  nodes: [["path",{"d":"M18 7c0-5.333-8-5.333-8 0"}],["path",{"d":"M10 7v14"}],["path",{"d":"M6 21h12"}],["path",{"d":"M6 13h10"}]]
};

export const PoundSterling = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M18 7c0-5.333-8-5.333-8 0" />
      <path d="M10 7v14" />
      <path d="M6 21h12" />
      <path d="M6 13h10" />
      {children}
    </svg>
  );
});

export default PoundSterling;
