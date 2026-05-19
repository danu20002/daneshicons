import React from 'react';

export const iconData = {
  "id": "PhrenThrust",
  "name": "PhrenThrust",
  "category": "LJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.33 6.53 L 19.67 6.53 L 19.67 17.47 L 4.33 17.47 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.33 6.53 L 8.62 2.24 L 23.96 2.24 L 19.67 6.53"
      }
    ],
    [
      "path",
      {
        "d": "M 19.67 6.53 L 23.96 2.24 L 23.96 13.18 L 19.67 17.47"
      }
    ]
  ]
};

export const PhrenThrust = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.33 6.53 L 19.67 6.53 L 19.67 17.47 L 4.33 17.47 Z" />
      <path d="M 4.33 6.53 L 8.62 2.24 L 23.96 2.24 L 19.67 6.53" />
      <path d="M 19.67 6.53 L 23.96 2.24 L 23.96 13.18 L 19.67 17.47" />
      {children}
    </svg>
  );
});

export default PhrenThrust;
