import React from 'react';

export const iconData = {
  "id": "VidimoWisdom",
  "name": "VidimoWisdom",
  "category": "LW",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.72 7.26 L 10.72 7.26"
      }
    ],
    [
      "path",
      {
        "d": "M 13.47 5.06 L 15.47 8.52"
      }
    ],
    [
      "path",
      {
        "d": "M 18.75 9.80 L 16.75 13.26"
      }
    ],
    [
      "path",
      {
        "d": "M 17.28 16.74 L 13.28 16.74"
      }
    ],
    [
      "path",
      {
        "d": "M 10.53 18.94 L 8.53 15.48"
      }
    ],
    [
      "path",
      {
        "d": "M 5.25 14.20 L 7.25 10.74"
      }
    ]
  ]
};

export const VidimoWisdom = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.72 7.26 L 10.72 7.26" />
      <path d="M 13.47 5.06 L 15.47 8.52" />
      <path d="M 18.75 9.80 L 16.75 13.26" />
      <path d="M 17.28 16.74 L 13.28 16.74" />
      <path d="M 10.53 18.94 L 8.53 15.48" />
      <path d="M 5.25 14.20 L 7.25 10.74" />
      {children}
    </svg>
  );
});

export default VidimoWisdom;
