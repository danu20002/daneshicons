import React from 'react';

export const iconData = {
  "id": "ViventeGulp",
  "name": "ViventeGulp",
  "category": "RB",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.06 12.43 L 7.10 19.63 L 7.84 3.94 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.48 14.90 L 6.74 15.30 L 11.77 5.80 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 14.55 13.83 L 9.14 13.29 L 12.31 8.88 Z"
      }
    ]
  ]
};

export const ViventeGulp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.06 12.43 L 7.10 19.63 L 7.84 3.94 Z" />
      <path d="M 17.48 14.90 L 6.74 15.30 L 11.77 5.80 Z" />
      <path d="M 14.55 13.83 L 9.14 13.29 L 12.31 8.88 Z" />
      {children}
    </svg>
  );
});

export default ViventeGulp;
