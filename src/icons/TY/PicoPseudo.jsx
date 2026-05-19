import React from 'react';

export const iconData = {
  "id": "PicoPseudo",
  "name": "PicoPseudo",
  "category": "TY",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.05 2.28 C 3.39 7.94, 12.44 13.64, 21.37 6.59"
      }
    ],
    [
      "path",
      {
        "d": "M 7.65 4.67 C 5.32 20.61, 16.99 2.37, 18.87 4.27"
      }
    ],
    [
      "path",
      {
        "d": "M 2.96 12.51 A 5.66 3.36 11 0 0 18.85 8.16"
      }
    ],
    [
      "path",
      {
        "d": "M 20.51 13.96 L 15.58 14.82"
      }
    ]
  ]
};

export const PicoPseudo = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.05 2.28 C 3.39 7.94, 12.44 13.64, 21.37 6.59" />
      <path d="M 7.65 4.67 C 5.32 20.61, 16.99 2.37, 18.87 4.27" />
      <path d="M 2.96 12.51 A 5.66 3.36 11 0 0 18.85 8.16" />
      <path d="M 20.51 13.96 L 15.58 14.82" />
      {children}
    </svg>
  );
});

export default PicoPseudo;
