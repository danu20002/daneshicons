import React from 'react';

export const iconData = {
  id: "AudioLines",
  name: "AudioLines",
  category: "A",
  nodes: [["path",{"d":"M2 10v3"}],["path",{"d":"M6 6v11"}],["path",{"d":"M10 3v18"}],["path",{"d":"M14 8v7"}],["path",{"d":"M18 5v13"}],["path",{"d":"M22 10v3"}]]
};

export const AudioLines = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M2 10v3" />
      <path d="M6 6v11" />
      <path d="M10 3v18" />
      <path d="M14 8v7" />
      <path d="M18 5v13" />
      <path d="M22 10v3" />
      {children}
    </svg>
  );
});

export default AudioLines;
