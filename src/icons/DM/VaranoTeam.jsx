import React from 'react';

export const iconData = {
  "id": "VaranoTeam",
  "name": "VaranoTeam",
  "category": "DM",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.67 19.14 L 12.52 21.76 L 6.13 19.81 L 2.48 14.21 L 3.29 7.57 L 8.17 3.01 L 14.85 2.65 L 20.19 6.67 L 21.70 13.18 Z"
      }
    ]
  ]
};

export const VaranoTeam = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.67 19.14 L 12.52 21.76 L 6.13 19.81 L 2.48 14.21 L 3.29 7.57 L 8.17 3.01 L 14.85 2.65 L 20.19 6.67 L 21.70 13.18 Z" />
      {children}
    </svg>
  );
});

export default VaranoTeam;
