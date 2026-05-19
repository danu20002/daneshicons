import React from 'react';

export const iconData = {
  "id": "TromboTape",
  "name": "TromboTape",
  "category": "JR",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.23 7.31 L 11.23 7.31"
      }
    ],
    [
      "path",
      {
        "d": "M 13.67 5.52 L 15.67 8.99"
      }
    ],
    [
      "path",
      {
        "d": "M 18.44 10.21 L 16.44 13.68"
      }
    ],
    [
      "path",
      {
        "d": "M 16.77 16.69 L 12.77 16.69"
      }
    ],
    [
      "path",
      {
        "d": "M 10.33 18.48 L 8.33 15.01"
      }
    ],
    [
      "path",
      {
        "d": "M 5.56 13.79 L 7.56 10.32"
      }
    ]
  ]
};

export const TromboTape = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.23 7.31 L 11.23 7.31" />
      <path d="M 13.67 5.52 L 15.67 8.99" />
      <path d="M 18.44 10.21 L 16.44 13.68" />
      <path d="M 16.77 16.69 L 12.77 16.69" />
      <path d="M 10.33 18.48 L 8.33 15.01" />
      <path d="M 5.56 13.79 L 7.56 10.32" />
      {children}
    </svg>
  );
});

export default TromboTape;
