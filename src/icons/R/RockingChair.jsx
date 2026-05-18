import React from 'react';

export const iconData = {
  id: "RockingChair",
  name: "RockingChair",
  category: "R",
  nodes: [["path",{"d":"m15 13 3.708 7.416"}],["path",{"d":"M3 19a15 15 0 0 0 18 0"}],["path",{"d":"m3 2 3.21 9.633A2 2 0 0 0 8.109 13H18"}],["path",{"d":"m9 13-3.708 7.416"}]]
};

export const RockingChair = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="m15 13 3.708 7.416" />
      <path d="M3 19a15 15 0 0 0 18 0" />
      <path d="m3 2 3.21 9.633A2 2 0 0 0 8.109 13H18" />
      <path d="m9 13-3.708 7.416" />
      {children}
    </svg>
  );
});

export default RockingChair;
