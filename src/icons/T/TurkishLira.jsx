import React from 'react';

export const iconData = {
  id: "TurkishLira",
  name: "TurkishLira",
  category: "T",
  nodes: [["path",{"d":"M15 4 5 9"}],["path",{"d":"m15 8.5-10 5"}],["path",{"d":"M18 12a9 9 0 0 1-9 9V3"}]]
};

export const TurkishLira = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M15 4 5 9" />
      <path d="m15 8.5-10 5" />
      <path d="M18 12a9 9 0 0 1-9 9V3" />
      {children}
    </svg>
  );
});

export default TurkishLira;
