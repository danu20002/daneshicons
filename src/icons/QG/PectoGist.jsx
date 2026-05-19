import React from 'react';

export const iconData = {
  "id": "PectoGist",
  "name": "PectoGist",
  "category": "QG",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.80 12.00 L 20.20 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.80 L 12.00 20.20"
      }
    ],
    [
      "path",
      {
        "d": "M 6.26 6.26 L 17.74 17.74"
      }
    ],
    [
      "path",
      {
        "d": "M 6.26 17.74 L 17.74 6.26"
      }
    ],
    [
      "path",
      {
        "d": "M 2.84 12.00 a 9.16 9.16 0 1 0 18.32 0 a 9.16 9.16 0 1 0 -18.32 0"
      }
    ]
  ]
};

export const PectoGist = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.80 12.00 L 20.20 12.00" />
      <path d="M 12.00 3.80 L 12.00 20.20" />
      <path d="M 6.26 6.26 L 17.74 17.74" />
      <path d="M 6.26 17.74 L 17.74 6.26" />
      <path d="M 2.84 12.00 a 9.16 9.16 0 1 0 18.32 0 a 9.16 9.16 0 1 0 -18.32 0" />
      {children}
    </svg>
  );
});

export default PectoGist;
