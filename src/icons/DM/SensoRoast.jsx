import React from 'react';

export const iconData = {
  "id": "SensoRoast",
  "name": "SensoRoast",
  "category": "DM",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.83 13.85 L 12.66 20.02 L 4.58 15.11 L 6.75 5.90 L 16.18 5.13 Z"
      }
    ]
  ]
};

export const SensoRoast = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.83 13.85 L 12.66 20.02 L 4.58 15.11 L 6.75 5.90 L 16.18 5.13 Z" />
      {children}
    </svg>
  );
});

export default SensoRoast;
