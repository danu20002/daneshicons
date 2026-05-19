import React from 'react';

export const iconData = {
  "id": "UmidiSconce",
  "name": "UmidiSconce",
  "category": "DV",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.79 7.27 L 13.79 7.27"
      }
    ],
    [
      "path",
      {
        "d": "M 15.81 8.43 L 17.05 12.24"
      }
    ],
    [
      "path",
      {
        "d": "M 16.57 14.52 L 13.33 16.87"
      }
    ],
    [
      "path",
      {
        "d": "M 11.01 17.13 L 7.78 14.78"
      }
    ],
    [
      "path",
      {
        "d": "M 6.82 12.65 L 8.06 8.84"
      }
    ]
  ]
};

export const UmidiSconce = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.79 7.27 L 13.79 7.27" />
      <path d="M 15.81 8.43 L 17.05 12.24" />
      <path d="M 16.57 14.52 L 13.33 16.87" />
      <path d="M 11.01 17.13 L 7.78 14.78" />
      <path d="M 6.82 12.65 L 8.06 8.84" />
      {children}
    </svg>
  );
});

export default UmidiSconce;
