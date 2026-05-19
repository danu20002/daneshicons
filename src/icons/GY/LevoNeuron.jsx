import React from 'react';

export const iconData = {
  "id": "LevoNeuron",
  "name": "LevoNeuron",
  "category": "GY",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.22 12.00 a 8.78 8.78 0 1 0 17.57 0 a 8.78 8.78 0 1 0 -17.57 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.72 9.07 a 8.28 2.484336783368821 0 1 0 16.56 0 a 8.28 2.484336783368821 0 1 0 -16.56 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.72 14.93 a 8.28 2.484336783368821 0 1 0 16.56 0 a 8.28 2.484336783368821 0 1 0 -16.56 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.39 4.39 A 2 2 0 0 0 16.39 19.61"
      }
    ],
    [
      "path",
      {
        "d": "M 16.39 4.39 A 2 2 0 0 1 16.39 19.61"
      }
    ],
    [
      "path",
      {
        "d": "M 7.61 4.39 A 2 2 0 0 0 7.61 19.61"
      }
    ],
    [
      "path",
      {
        "d": "M 7.61 4.39 A 2 2 0 0 1 7.61 19.61"
      }
    ]
  ]
};

export const LevoNeuron = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.22 12.00 a 8.78 8.78 0 1 0 17.57 0 a 8.78 8.78 0 1 0 -17.57 0" />
      <path d="M 3.72 9.07 a 8.28 2.484336783368821 0 1 0 16.56 0 a 8.28 2.484336783368821 0 1 0 -16.56 0" />
      <path d="M 3.72 14.93 a 8.28 2.484336783368821 0 1 0 16.56 0 a 8.28 2.484336783368821 0 1 0 -16.56 0" />
      <path d="M 16.39 4.39 A 2 2 0 0 0 16.39 19.61" />
      <path d="M 16.39 4.39 A 2 2 0 0 1 16.39 19.61" />
      <path d="M 7.61 4.39 A 2 2 0 0 0 7.61 19.61" />
      <path d="M 7.61 4.39 A 2 2 0 0 1 7.61 19.61" />
      {children}
    </svg>
  );
});

export default LevoNeuron;
