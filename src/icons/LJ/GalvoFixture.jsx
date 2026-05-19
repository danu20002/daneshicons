import React from 'react';

export const iconData = {
  "id": "GalvoFixture",
  "name": "GalvoFixture",
  "category": "LJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.49 5.19 L 19.51 5.19 L 19.51 18.81 L 4.49 18.81 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.49 5.19 L 9.28 0.41 L 24.29 0.41 L 19.51 5.19"
      }
    ],
    [
      "path",
      {
        "d": "M 19.51 5.19 L 24.29 0.41 L 24.29 14.03 L 19.51 18.81"
      }
    ]
  ]
};

export const GalvoFixture = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.49 5.19 L 19.51 5.19 L 19.51 18.81 L 4.49 18.81 Z" />
      <path d="M 4.49 5.19 L 9.28 0.41 L 24.29 0.41 L 19.51 5.19" />
      <path d="M 19.51 5.19 L 24.29 0.41 L 24.29 14.03 L 19.51 18.81" />
      {children}
    </svg>
  );
});

export default GalvoFixture;
