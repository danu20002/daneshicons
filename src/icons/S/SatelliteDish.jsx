import React from 'react';

export const iconData = {
  id: "SatelliteDish",
  name: "SatelliteDish",
  category: "S",
  nodes: [["path",{"d":"M4 10a7.31 7.31 0 0 0 10 10Z"}],["path",{"d":"m9 15 3-3"}],["path",{"d":"M17 13a6 6 0 0 0-6-6"}],["path",{"d":"M21 13A10 10 0 0 0 11 3"}]]
};

export const SatelliteDish = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M4 10a7.31 7.31 0 0 0 10 10Z" />
      <path d="m9 15 3-3" />
      <path d="M17 13a6 6 0 0 0-6-6" />
      <path d="M21 13A10 10 0 0 0 11 3" />
      {children}
    </svg>
  );
});

export default SatelliteDish;
