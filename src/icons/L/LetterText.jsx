import React from 'react';

export const iconData = {
  id: "LetterText",
  name: "LetterText",
  category: "L",
  nodes: [["path",{"d":"M15 5h6"}],["path",{"d":"M15 12h6"}],["path",{"d":"M3 19h18"}],["path",{"d":"m3 12 3.553-7.724a.5.5 0 0 1 .894 0L11 12"}],["path",{"d":"M3.92 10h6.16"}]]
};

export const LetterText = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M15 5h6" />
      <path d="M15 12h6" />
      <path d="M3 19h18" />
      <path d="m3 12 3.553-7.724a.5.5 0 0 1 .894 0L11 12" />
      <path d="M3.92 10h6.16" />
      {children}
    </svg>
  );
});

export default LetterText;
