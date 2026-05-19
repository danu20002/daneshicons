import React from 'react';

export const iconData = {
  "id": "SyringoCradle",
  "name": "SyringoCradle",
  "category": "Z",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.65 12.00 a 2.35 2.35 0 1 0 4.70 0 a 2.35 2.35 0 1 0 -4.70 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.27 12.00 a 3.73 3.73 0 1 0 7.47 0 a 3.73 3.73 0 1 0 -7.47 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.42 12.00 a 5.58 5.58 0 1 0 11.16 0 a 5.58 5.58 0 1 0 -11.16 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.86 12.00 a 7.14 7.14 0 1 0 14.28 0 a 7.14 7.14 0 1 0 -14.28 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.27 12.00 a 8.73 8.73 0 1 0 17.47 0 a 8.73 8.73 0 1 0 -17.47 0"
      }
    ]
  ]
};

export const SyringoCradle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.65 12.00 a 2.35 2.35 0 1 0 4.70 0 a 2.35 2.35 0 1 0 -4.70 0" />
      <path d="M 8.27 12.00 a 3.73 3.73 0 1 0 7.47 0 a 3.73 3.73 0 1 0 -7.47 0" />
      <path d="M 6.42 12.00 a 5.58 5.58 0 1 0 11.16 0 a 5.58 5.58 0 1 0 -11.16 0" />
      <path d="M 4.86 12.00 a 7.14 7.14 0 1 0 14.28 0 a 7.14 7.14 0 1 0 -14.28 0" />
      <path d="M 3.27 12.00 a 8.73 8.73 0 1 0 17.47 0 a 8.73 8.73 0 1 0 -17.47 0" />
      {children}
    </svg>
  );
});

export default SyringoCradle;
