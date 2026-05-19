import React from 'react';

export const iconData = {
  "id": "TimbroHarvest",
  "name": "TimbroHarvest",
  "category": "FI",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.30 15.05 Q 2.85 2.19 13.95 18.66"
      }
    ],
    [
      "path",
      {
        "d": "M 15.59 19.51 L 13.07 8.75"
      }
    ]
  ]
};

export const TimbroHarvest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.30 15.05 Q 2.85 2.19 13.95 18.66" />
      <path d="M 15.59 19.51 L 13.07 8.75" />
      {children}
    </svg>
  );
});

export default TimbroHarvest;
