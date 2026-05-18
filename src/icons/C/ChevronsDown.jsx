import React from 'react';

export const iconData = {
  id: "ChevronsDown",
  name: "ChevronsDown",
  category: "C",
  nodes: [["path",{"d":"m7 6 5 5 5-5"}],["path",{"d":"m7 13 5 5 5-5"}]]
};

export const ChevronsDown = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="m7 6 5 5 5-5" />
      <path d="m7 13 5 5 5-5" />
      {children}
    </svg>
  );
});

export default ChevronsDown;
