import React from 'react';

export const iconData = {
  id: "SquareArrowRightExit",
  name: "SquareArrowRightExit",
  category: "S",
  nodes: [["path",{"d":"M10 12h11"}],["path",{"d":"m17 16 4-4-4-4"}],["path",{"d":"M21 6.344V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1.344"}]]
};

export const SquareArrowRightExit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M10 12h11" />
      <path d="m17 16 4-4-4-4" />
      <path d="M21 6.344V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1.344" />
      {children}
    </svg>
  );
});

export default SquareArrowRightExit;
