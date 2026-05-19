import React from 'react';

export const iconData = {
  "id": "VividoSandwich",
  "name": "VividoSandwich",
  "category": "UR",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.58 16.63 L 11.47 8.45 L 17.20 4.85 L 4.09 20.56"
      }
    ],
    [
      "path",
      {
        "d": "M 5.77 10.92 Q 8.69 2.81 3.47 3.64"
      }
    ],
    [
      "path",
      {
        "d": "M 19.58 20.49 C 10.23 13.45, 6.49 4.10, 3.70 18.49"
      }
    ],
    [
      "path",
      {
        "d": "M 9.97 18.03 L 14.20 11.04 L 9.37 20.24 L 15.99 14.32 L 21.45 15.76 L 5.09 10.32 L 11.83 11.18 L 18.73 16.83"
      }
    ],
    [
      "path",
      {
        "d": "M 18.17 20.97 C 11.09 3.80, 3.28 5.78, 8.04 18.74"
      }
    ]
  ]
};

export const VividoSandwich = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.58 16.63 L 11.47 8.45 L 17.20 4.85 L 4.09 20.56" />
      <path d="M 5.77 10.92 Q 8.69 2.81 3.47 3.64" />
      <path d="M 19.58 20.49 C 10.23 13.45, 6.49 4.10, 3.70 18.49" />
      <path d="M 9.97 18.03 L 14.20 11.04 L 9.37 20.24 L 15.99 14.32 L 21.45 15.76 L 5.09 10.32 L 11.83 11.18 L 18.73 16.83" />
      <path d="M 18.17 20.97 C 11.09 3.80, 3.28 5.78, 8.04 18.74" />
      {children}
    </svg>
  );
});

export default VividoSandwich;
