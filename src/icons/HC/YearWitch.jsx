import React from 'react';

export const iconData = {
  "id": "YearWitch",
  "name": "YearWitch",
  "category": "HC",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.00 18.26 L 9.07 19.46 L 4.08 13.20 L 7.00 5.74 L 14.93 4.54 L 19.92 10.80 Z"
      }
    ]
  ]
};

export const YearWitch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.00 18.26 L 9.07 19.46 L 4.08 13.20 L 7.00 5.74 L 14.93 4.54 L 19.92 10.80 Z" />
      {children}
    </svg>
  );
});

export default YearWitch;
