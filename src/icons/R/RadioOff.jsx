import React from 'react';

export const iconData = {
  id: "RadioOff",
  name: "RadioOff",
  category: "R",
  nodes: [["path",{"d":"M13.414 13.414a2 2 0 1 1-2.828-2.828"}],["path",{"d":"M16.247 7.761a6 6 0 0 1 1.744 4.572"}],["path",{"d":"M19.075 4.933a10 10 0 0 1 2.234 10.72"}],["path",{"d":"m2 2 20 20"}],["path",{"d":"M4.925 19.067a10 10 0 0 1 0-14.134"}],["path",{"d":"M7.753 16.239a6 6 0 0 1 0-8.478"}]]
};

export const RadioOff = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M13.414 13.414a2 2 0 1 1-2.828-2.828" />
      <path d="M16.247 7.761a6 6 0 0 1 1.744 4.572" />
      <path d="M19.075 4.933a10 10 0 0 1 2.234 10.72" />
      <path d="m2 2 20 20" />
      <path d="M4.925 19.067a10 10 0 0 1 0-14.134" />
      <path d="M7.753 16.239a6 6 0 0 1 0-8.478" />
      {children}
    </svg>
  );
});

export default RadioOff;
