import React from 'react';

export const iconData = {
  "id": "FractoMiddle",
  "name": "FractoMiddle",
  "category": "AF",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.32 14.48 A 5.01 2.51 91 0 0 3.55 20.59"
      }
    ],
    [
      "path",
      {
        "d": "M 6.38 3.72 Q 4.62 7.95 17.28 13.37"
      }
    ],
    [
      "path",
      {
        "d": "M 19.67 15.83 Q 20.31 2.94 3.40 18.76"
      }
    ],
    [
      "path",
      {
        "d": "M 3.04 3.79 C 14.21 16.46, 16.32 7.01, 3.69 11.58"
      }
    ],
    [
      "path",
      {
        "d": "M 5.78 2.37 C 19.78 18.84, 9.50 4.49, 20.95 4.71"
      }
    ]
  ]
};

export const FractoMiddle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.32 14.48 A 5.01 2.51 91 0 0 3.55 20.59" />
      <path d="M 6.38 3.72 Q 4.62 7.95 17.28 13.37" />
      <path d="M 19.67 15.83 Q 20.31 2.94 3.40 18.76" />
      <path d="M 3.04 3.79 C 14.21 16.46, 16.32 7.01, 3.69 11.58" />
      <path d="M 5.78 2.37 C 19.78 18.84, 9.50 4.49, 20.95 4.71" />
      {children}
    </svg>
  );
});

export default FractoMiddle;
