import React from 'react';

export const iconData = {
  id: "ArrowDownLeft",
  name: "ArrowDownLeft",
  category: "A",
  nodes: [["path",{"d":"M17 7 7 17"}],["path",{"d":"M17 17H7V7"}]]
};

export const ArrowDownLeft = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M17 7 7 17" />
      <path d="M17 17H7V7" />
      {children}
    </svg>
  );
});

export default ArrowDownLeft;
