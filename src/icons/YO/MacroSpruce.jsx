import React from 'react';

export const iconData = {
  "id": "MacroSpruce",
  "name": "MacroSpruce",
  "category": "YO",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.79 12.00 a 8.21 8.21 0 1 0 16.42 0 a 8.21 8.21 0 1 0 -16.42 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.78 12.00 a 6.22 6.22 0 1 1 12.45 0 a 6.22 6.22 0 1 1 -12.45 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.71 12.00 L 21.71 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.24 16.53 L 19.86 17.71"
      }
    ],
    [
      "path",
      {
        "d": "M 14.38 19.33 L 15.00 21.23"
      }
    ],
    [
      "path",
      {
        "d": "M 9.62 19.33 L 9.00 21.23"
      }
    ],
    [
      "path",
      {
        "d": "M 5.76 16.53 L 4.14 17.71"
      }
    ],
    [
      "path",
      {
        "d": "M 4.29 12.00 L 2.29 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.76 7.47 L 4.14 6.29"
      }
    ],
    [
      "path",
      {
        "d": "M 9.62 4.67 L 9.00 2.77"
      }
    ],
    [
      "path",
      {
        "d": "M 14.38 4.67 L 15.00 2.77"
      }
    ],
    [
      "path",
      {
        "d": "M 18.24 7.47 L 19.86 6.29"
      }
    ]
  ]
};

export const MacroSpruce = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.79 12.00 a 8.21 8.21 0 1 0 16.42 0 a 8.21 8.21 0 1 0 -16.42 0" />
      <path d="M 5.78 12.00 a 6.22 6.22 0 1 1 12.45 0 a 6.22 6.22 0 1 1 -12.45 0" />
      <path d="M 19.71 12.00 L 21.71 12.00" />
      <path d="M 18.24 16.53 L 19.86 17.71" />
      <path d="M 14.38 19.33 L 15.00 21.23" />
      <path d="M 9.62 19.33 L 9.00 21.23" />
      <path d="M 5.76 16.53 L 4.14 17.71" />
      <path d="M 4.29 12.00 L 2.29 12.00" />
      <path d="M 5.76 7.47 L 4.14 6.29" />
      <path d="M 9.62 4.67 L 9.00 2.77" />
      <path d="M 14.38 4.67 L 15.00 2.77" />
      <path d="M 18.24 7.47 L 19.86 6.29" />
      {children}
    </svg>
  );
});

export default MacroSpruce;
