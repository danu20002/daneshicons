import React from 'react';

export const iconData = {
  id: "ArrowDownRight",
  name: "ArrowDownRight",
  category: "A",
  nodes: [["path",{"d":"m7 7 10 10"}],["path",{"d":"M17 7v10H7"}]]
};

export const ArrowDownRight = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="m7 7 10 10" />
      <path d="M17 7v10H7" />
      {children}
    </svg>
  );
});

export default ArrowDownRight;
