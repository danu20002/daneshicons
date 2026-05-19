import React from 'react';

export const iconData = {
  "id": "TomoClean",
  "name": "TomoClean",
  "category": "FH",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.17 9.57 L 13.17 9.57"
      }
    ],
    [
      "path",
      {
        "d": "M 13.43 8.56 L 14.67 12.37"
      }
    ],
    [
      "path",
      {
        "d": "M 15.71 12.30 L 12.48 14.65"
      }
    ],
    [
      "path",
      {
        "d": "M 12.86 15.63 L 9.62 13.27"
      }
    ],
    [
      "path",
      {
        "d": "M 8.82 13.94 L 10.05 10.13"
      }
    ]
  ]
};

export const TomoClean = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.17 9.57 L 13.17 9.57" />
      <path d="M 13.43 8.56 L 14.67 12.37" />
      <path d="M 15.71 12.30 L 12.48 14.65" />
      <path d="M 12.86 15.63 L 9.62 13.27" />
      <path d="M 8.82 13.94 L 10.05 10.13" />
      {children}
    </svg>
  );
});

export default TomoClean;
