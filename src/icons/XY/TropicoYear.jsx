import React from 'react';

export const iconData = {
  "id": "TropicoYear",
  "name": "TropicoYear",
  "category": "XY",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.32 9.83 L 8.29 3.86 L 16.05 4.02 L 20.76 10.19 L 18.88 17.73 L 11.81 20.95 L 4.89 17.43 Z"
      }
    ]
  ]
};

export const TropicoYear = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.32 9.83 L 8.29 3.86 L 16.05 4.02 L 20.76 10.19 L 18.88 17.73 L 11.81 20.95 L 4.89 17.43 Z" />
      {children}
    </svg>
  );
});

export default TropicoYear;
