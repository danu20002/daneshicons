import React from 'react';

export const iconData = {
  "id": "InfraPivot",
  "name": "InfraPivot",
  "category": "KL",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.26 14.76 L 15.21 12.11 L 2.93 4.24 L 20.78 13.70 L 7.30 10.42 L 16.28 2.29 L 15.86 21.62"
      }
    ],
    [
      "path",
      {
        "d": "M 19.09 16.03 A 6.24 3.39 177 0 0 7.44 10.03"
      }
    ],
    [
      "path",
      {
        "d": "M 11.74 11.45 L 12.56 12.56"
      }
    ]
  ]
};

export const InfraPivot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.26 14.76 L 15.21 12.11 L 2.93 4.24 L 20.78 13.70 L 7.30 10.42 L 16.28 2.29 L 15.86 21.62" />
      <path d="M 19.09 16.03 A 6.24 3.39 177 0 0 7.44 10.03" />
      <path d="M 11.74 11.45 L 12.56 12.56" />
      {children}
    </svg>
  );
});

export default InfraPivot;
