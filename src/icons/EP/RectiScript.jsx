import React from 'react';

export const iconData = {
  "id": "RectiScript",
  "name": "RectiScript",
  "category": "EP",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.01 12.83 L 19.01 10.01 L 15.84 15.36 L 5.54 4.91 L 8.49 7.65"
      }
    ],
    [
      "path",
      {
        "d": "M 9.46 18.42 A 5.81 2.55 42 0 0 4.64 10.22"
      }
    ],
    [
      "path",
      {
        "d": "M 4.59 7.54 C 8.37 9.36, 13.91 11.16, 15.94 6.78"
      }
    ],
    [
      "path",
      {
        "d": "M 9.59 8.02 L 19.31 20.11"
      }
    ],
    [
      "path",
      {
        "d": "M 12.82 20.35 A 2.02 2.43 151 0 1 17.89 6.77"
      }
    ],
    [
      "path",
      {
        "d": "M 5.72 2.28 A 3.05 2.82 166 0 1 6.13 21.86"
      }
    ]
  ]
};

export const RectiScript = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.01 12.83 L 19.01 10.01 L 15.84 15.36 L 5.54 4.91 L 8.49 7.65" />
      <path d="M 9.46 18.42 A 5.81 2.55 42 0 0 4.64 10.22" />
      <path d="M 4.59 7.54 C 8.37 9.36, 13.91 11.16, 15.94 6.78" />
      <path d="M 9.59 8.02 L 19.31 20.11" />
      <path d="M 12.82 20.35 A 2.02 2.43 151 0 1 17.89 6.77" />
      <path d="M 5.72 2.28 A 3.05 2.82 166 0 1 6.13 21.86" />
      {children}
    </svg>
  );
});

export default RectiScript;
