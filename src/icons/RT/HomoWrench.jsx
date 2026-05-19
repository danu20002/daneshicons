import React from 'react';

export const iconData = {
  "id": "HomoWrench",
  "name": "HomoWrench",
  "category": "RT",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.03 21.66 L 16.18 17.71 L 17.13 20.37 L 4.25 11.37 L 21.73 16.57 L 8.36 16.95 L 16.88 19.74 L 16.23 14.09"
      }
    ],
    [
      "path",
      {
        "d": "M 2.04 20.69 L 5.52 4.28"
      }
    ],
    [
      "path",
      {
        "d": "M 6.21 15.44 Q 18.95 2.50 7.62 8.82"
      }
    ],
    [
      "path",
      {
        "d": "M 19.32 16.94 L 16.68 4.45 L 16.79 3.35 L 7.38 15.27 L 5.89 5.35 L 15.78 18.14 L 2.28 17.60 L 11.90 4.01"
      }
    ],
    [
      "path",
      {
        "d": "M 3.71 3.42 A 3.03 3.04 132 0 1 8.39 11.54"
      }
    ],
    [
      "path",
      {
        "d": "M 5.28 9.80 L 11.51 15.55"
      }
    ]
  ]
};

export const HomoWrench = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.03 21.66 L 16.18 17.71 L 17.13 20.37 L 4.25 11.37 L 21.73 16.57 L 8.36 16.95 L 16.88 19.74 L 16.23 14.09" />
      <path d="M 2.04 20.69 L 5.52 4.28" />
      <path d="M 6.21 15.44 Q 18.95 2.50 7.62 8.82" />
      <path d="M 19.32 16.94 L 16.68 4.45 L 16.79 3.35 L 7.38 15.27 L 5.89 5.35 L 15.78 18.14 L 2.28 17.60 L 11.90 4.01" />
      <path d="M 3.71 3.42 A 3.03 3.04 132 0 1 8.39 11.54" />
      <path d="M 5.28 9.80 L 11.51 15.55" />
      {children}
    </svg>
  );
});

export default HomoWrench;
