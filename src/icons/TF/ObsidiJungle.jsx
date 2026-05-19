import React from 'react';

export const iconData = {
  "id": "ObsidiJungle",
  "name": "ObsidiJungle",
  "category": "TF",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.83 20.63 L 21.92 16.13"
      }
    ],
    [
      "path",
      {
        "d": "M 3.68 12.23 Q 8.51 14.21 14.86 3.78"
      }
    ],
    [
      "path",
      {
        "d": "M 3.20 21.52 C 6.58 6.10, 12.54 9.84, 18.17 4.34"
      }
    ],
    [
      "path",
      {
        "d": "M 4.83 16.90 C 4.20 6.21, 20.99 6.05, 14.78 3.82"
      }
    ],
    [
      "path",
      {
        "d": "M 10.38 2.62 L 20.07 13.18 L 2.64 12.63"
      }
    ],
    [
      "path",
      {
        "d": "M 21.58 12.98 L 9.77 6.77 L 20.80 21.41 L 12.54 21.61 L 6.79 17.38 L 14.61 12.98"
      }
    ]
  ]
};

export const ObsidiJungle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.83 20.63 L 21.92 16.13" />
      <path d="M 3.68 12.23 Q 8.51 14.21 14.86 3.78" />
      <path d="M 3.20 21.52 C 6.58 6.10, 12.54 9.84, 18.17 4.34" />
      <path d="M 4.83 16.90 C 4.20 6.21, 20.99 6.05, 14.78 3.82" />
      <path d="M 10.38 2.62 L 20.07 13.18 L 2.64 12.63" />
      <path d="M 21.58 12.98 L 9.77 6.77 L 20.80 21.41 L 12.54 21.61 L 6.79 17.38 L 14.61 12.98" />
      {children}
    </svg>
  );
});

export default ObsidiJungle;
