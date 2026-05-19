import React from 'react';

export const iconData = {
  "id": "ModuPuzzle",
  "name": "ModuPuzzle",
  "category": "UR",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.03 18.83 L 6.95 7.12"
      }
    ],
    [
      "path",
      {
        "d": "M 20.60 6.82 C 13.88 12.89, 2.66 10.53, 8.67 6.05"
      }
    ],
    [
      "path",
      {
        "d": "M 14.75 15.32 L 9.62 21.41 L 2.80 18.91 L 15.65 6.02 L 19.67 8.58 L 8.89 14.10 L 13.11 9.15 L 18.64 13.12"
      }
    ],
    [
      "path",
      {
        "d": "M 3.95 2.31 L 19.59 19.04"
      }
    ]
  ]
};

export const ModuPuzzle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.03 18.83 L 6.95 7.12" />
      <path d="M 20.60 6.82 C 13.88 12.89, 2.66 10.53, 8.67 6.05" />
      <path d="M 14.75 15.32 L 9.62 21.41 L 2.80 18.91 L 15.65 6.02 L 19.67 8.58 L 8.89 14.10 L 13.11 9.15 L 18.64 13.12" />
      <path d="M 3.95 2.31 L 19.59 19.04" />
      {children}
    </svg>
  );
});

export default ModuPuzzle;
