import React from 'react';

export const iconData = {
  "id": "ModuThumb",
  "name": "ModuThumb",
  "category": "VF",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.70 5.51 C 8.62 16.05, 11.24 17.59, 16.06 17.33"
      }
    ],
    [
      "path",
      {
        "d": "M 6.79 2.46 C 5.50 18.85, 16.49 5.31, 16.49 19.88"
      }
    ],
    [
      "path",
      {
        "d": "M 2.80 7.86 C 6.65 7.50, 5.82 6.58, 15.05 20.09"
      }
    ]
  ]
};

export const ModuThumb = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.70 5.51 C 8.62 16.05, 11.24 17.59, 16.06 17.33" />
      <path d="M 6.79 2.46 C 5.50 18.85, 16.49 5.31, 16.49 19.88" />
      <path d="M 2.80 7.86 C 6.65 7.50, 5.82 6.58, 15.05 20.09" />
      {children}
    </svg>
  );
});

export default ModuThumb;
