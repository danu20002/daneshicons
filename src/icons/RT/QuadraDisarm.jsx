import React from 'react';

export const iconData = {
  "id": "QuadraDisarm",
  "name": "QuadraDisarm",
  "category": "RT",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.13 17.73 C 3.04 10.72, 19.10 15.24, 15.20 4.72"
      }
    ],
    [
      "path",
      {
        "d": "M 5.13 14.45 L 15.66 12.57"
      }
    ],
    [
      "path",
      {
        "d": "M 9.92 6.73 C 20.00 9.25, 13.91 18.49, 10.23 6.84"
      }
    ],
    [
      "path",
      {
        "d": "M 10.01 9.69 L 21.48 8.05"
      }
    ],
    [
      "path",
      {
        "d": "M 17.53 7.33 L 15.14 11.36"
      }
    ]
  ]
};

export const QuadraDisarm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.13 17.73 C 3.04 10.72, 19.10 15.24, 15.20 4.72" />
      <path d="M 5.13 14.45 L 15.66 12.57" />
      <path d="M 9.92 6.73 C 20.00 9.25, 13.91 18.49, 10.23 6.84" />
      <path d="M 10.01 9.69 L 21.48 8.05" />
      <path d="M 17.53 7.33 L 15.14 11.36" />
      {children}
    </svg>
  );
});

export default QuadraDisarm;
