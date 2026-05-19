import React from 'react';

export const iconData = {
  "id": "GlacioGleam",
  "name": "GlacioGleam",
  "category": "WQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.63 12.00 a 2.37 2.37 0 1 0 4.73 0 a 2.37 2.37 0 1 0 -4.73 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.87 12.00 a 5.13 5.13 0 1 0 10.26 0 a 5.13 5.13 0 1 0 -10.26 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.41 12.00 a 7.59 7.59 0 1 0 15.18 0 a 7.59 7.59 0 1 0 -15.18 0"
      }
    ]
  ]
};

export const GlacioGleam = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.63 12.00 a 2.37 2.37 0 1 0 4.73 0 a 2.37 2.37 0 1 0 -4.73 0" />
      <path d="M 6.87 12.00 a 5.13 5.13 0 1 0 10.26 0 a 5.13 5.13 0 1 0 -10.26 0" />
      <path d="M 4.41 12.00 a 7.59 7.59 0 1 0 15.18 0 a 7.59 7.59 0 1 0 -15.18 0" />
      {children}
    </svg>
  );
});

export default GlacioGleam;
