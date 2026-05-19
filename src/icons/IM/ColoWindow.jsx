import React from 'react';

export const iconData = {
  "id": "ColoWindow",
  "name": "ColoWindow",
  "category": "IM",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.11 12.00 a 8.89 8.89 0 1 0 17.78 0 a 8.89 8.89 0 1 0 -17.78 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.72 12.00 a 6.28 6.28 0 1 1 12.55 0 a 6.28 6.28 0 1 1 -12.55 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.39 12.00 L 22.39 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.23 18.56 L 18.48 20.12"
      }
    ],
    [
      "path",
      {
        "d": "M 10.13 20.18 L 9.69 22.13"
      }
    ],
    [
      "path",
      {
        "d": "M 4.44 15.64 L 2.64 16.51"
      }
    ],
    [
      "path",
      {
        "d": "M 4.44 8.36 L 2.64 7.49"
      }
    ],
    [
      "path",
      {
        "d": "M 10.13 3.82 L 9.69 1.87"
      }
    ],
    [
      "path",
      {
        "d": "M 17.23 5.44 L 18.48 3.88"
      }
    ]
  ]
};

export const ColoWindow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.11 12.00 a 8.89 8.89 0 1 0 17.78 0 a 8.89 8.89 0 1 0 -17.78 0" />
      <path d="M 5.72 12.00 a 6.28 6.28 0 1 1 12.55 0 a 6.28 6.28 0 1 1 -12.55 0" />
      <path d="M 20.39 12.00 L 22.39 12.00" />
      <path d="M 17.23 18.56 L 18.48 20.12" />
      <path d="M 10.13 20.18 L 9.69 22.13" />
      <path d="M 4.44 15.64 L 2.64 16.51" />
      <path d="M 4.44 8.36 L 2.64 7.49" />
      <path d="M 10.13 3.82 L 9.69 1.87" />
      <path d="M 17.23 5.44 L 18.48 3.88" />
      {children}
    </svg>
  );
});

export default ColoWindow;
