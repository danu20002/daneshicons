import React from 'react';

export const iconData = {
  "id": "MetaMacro",
  "name": "MetaMacro",
  "category": "AA",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.27 7.83 C 17.99 6.81, 8.87 15.09, 20.40 15.40"
      }
    ],
    [
      "path",
      {
        "d": "M 9.54 5.95 C 7.78 7.29, 12.65 15.15, 15.88 14.48"
      }
    ],
    [
      "path",
      {
        "d": "M 7.78 7.92 C 17.03 19.04, 17.93 6.69, 15.60 16.84"
      }
    ],
    [
      "path",
      {
        "d": "M 8.73 8.66 C 9.95 16.40, 6.15 7.95, 20.33 16.64"
      }
    ],
    [
      "path",
      {
        "d": "M 3.94 9.06 C 7.65 6.18, 15.15 5.45, 14.79 15.52"
      }
    ]
  ]
};

export const MetaMacro = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.27 7.83 C 17.99 6.81, 8.87 15.09, 20.40 15.40" />
      <path d="M 9.54 5.95 C 7.78 7.29, 12.65 15.15, 15.88 14.48" />
      <path d="M 7.78 7.92 C 17.03 19.04, 17.93 6.69, 15.60 16.84" />
      <path d="M 8.73 8.66 C 9.95 16.40, 6.15 7.95, 20.33 16.64" />
      <path d="M 3.94 9.06 C 7.65 6.18, 15.15 5.45, 14.79 15.52" />
      {children}
    </svg>
  );
});

export default MetaMacro;
