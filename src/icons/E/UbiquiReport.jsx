import React from 'react';

export const iconData = {
  "id": "UbiquiReport",
  "name": "UbiquiReport",
  "category": "E",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.43 21.02 L 10.23 16.63 L 4.17 17.10 L 7.05 11.75 L 4.73 6.13 L 10.71 7.21 L 15.34 3.28 L 16.15 9.30 L 21.33 12.48 L 15.85 15.12 Z"
      }
    ]
  ]
};

export const UbiquiReport = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.43 21.02 L 10.23 16.63 L 4.17 17.10 L 7.05 11.75 L 4.73 6.13 L 10.71 7.21 L 15.34 3.28 L 16.15 9.30 L 21.33 12.48 L 15.85 15.12 Z" />
      {children}
    </svg>
  );
});

export default UbiquiReport;
