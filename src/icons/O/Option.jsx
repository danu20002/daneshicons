import React from 'react';

export const iconData = {
  id: "Option",
  name: "Option",
  category: "O",
  nodes: [["path",{"d":"M3 3h6l6 18h6"}],["path",{"d":"M14 3h7"}]]
};

export const Option = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M3 3h6l6 18h6" />
      <path d="M14 3h7" />
      {children}
    </svg>
  );
});

export default Option;
