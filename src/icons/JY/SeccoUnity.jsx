import React from 'react';

export const iconData = {
  "id": "SeccoUnity",
  "name": "SeccoUnity",
  "category": "JY",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.66 12.00 a 7.34 7.34 0 1 0 14.68 0 a 7.34 7.34 0 1 0 -14.68 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.72 12.00 a 5.28 5.28 0 1 1 10.56 0 a 5.28 5.28 0 1 1 -10.56 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.84 12.00 L 20.84 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.26 17.35 L 17.51 18.91"
      }
    ],
    [
      "path",
      {
        "d": "M 10.48 18.67 L 10.03 20.62"
      }
    ],
    [
      "path",
      {
        "d": "M 5.84 14.97 L 4.04 15.84"
      }
    ],
    [
      "path",
      {
        "d": "M 5.84 9.03 L 4.04 8.16"
      }
    ],
    [
      "path",
      {
        "d": "M 10.48 5.33 L 10.03 3.38"
      }
    ],
    [
      "path",
      {
        "d": "M 16.26 6.65 L 17.51 5.09"
      }
    ]
  ]
};

export const SeccoUnity = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.66 12.00 a 7.34 7.34 0 1 0 14.68 0 a 7.34 7.34 0 1 0 -14.68 0" />
      <path d="M 6.72 12.00 a 5.28 5.28 0 1 1 10.56 0 a 5.28 5.28 0 1 1 -10.56 0" />
      <path d="M 18.84 12.00 L 20.84 12.00" />
      <path d="M 16.26 17.35 L 17.51 18.91" />
      <path d="M 10.48 18.67 L 10.03 20.62" />
      <path d="M 5.84 14.97 L 4.04 15.84" />
      <path d="M 5.84 9.03 L 4.04 8.16" />
      <path d="M 10.48 5.33 L 10.03 3.38" />
      <path d="M 16.26 6.65 L 17.51 5.09" />
      {children}
    </svg>
  );
});

export default SeccoUnity;
