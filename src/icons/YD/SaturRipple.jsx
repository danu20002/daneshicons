import React from 'react';

export const iconData = {
  "id": "SaturRipple",
  "name": "SaturRipple",
  "category": "YD",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.68 2.20 C 18.57 11.79, 9.87 10.62, 18.68 19.37"
      }
    ],
    [
      "path",
      {
        "d": "M 5.81 8.65 C 6.63 17.09, 12.18 7.57, 18.81 18.09"
      }
    ],
    [
      "path",
      {
        "d": "M 3.04 8.01 C 8.43 7.88, 7.30 17.83, 14.48 21.77"
      }
    ],
    [
      "path",
      {
        "d": "M 3.95 7.29 C 18.20 6.28, 15.58 13.21, 19.16 19.30"
      }
    ],
    [
      "path",
      {
        "d": "M 3.28 2.77 C 8.40 15.33, 4.24 6.65, 19.99 18.84"
      }
    ],
    [
      "path",
      {
        "d": "M 7.93 6.24 C 4.46 10.49, 9.93 19.91, 14.40 14.94"
      }
    ]
  ]
};

export const SaturRipple = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.68 2.20 C 18.57 11.79, 9.87 10.62, 18.68 19.37" />
      <path d="M 5.81 8.65 C 6.63 17.09, 12.18 7.57, 18.81 18.09" />
      <path d="M 3.04 8.01 C 8.43 7.88, 7.30 17.83, 14.48 21.77" />
      <path d="M 3.95 7.29 C 18.20 6.28, 15.58 13.21, 19.16 19.30" />
      <path d="M 3.28 2.77 C 8.40 15.33, 4.24 6.65, 19.99 18.84" />
      <path d="M 7.93 6.24 C 4.46 10.49, 9.93 19.91, 14.40 14.94" />
      {children}
    </svg>
  );
});

export default SaturRipple;
