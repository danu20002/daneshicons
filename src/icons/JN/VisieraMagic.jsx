import React from 'react';

export const iconData = {
  "id": "VisieraMagic",
  "name": "VisieraMagic",
  "category": "JN",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.84 9.02 C 19.59 14.40, 16.44 19.97, 21.38 17.40"
      }
    ],
    [
      "path",
      {
        "d": "M 3.85 5.97 C 4.00 8.59, 11.08 10.92, 14.40 18.31"
      }
    ],
    [
      "path",
      {
        "d": "M 6.31 8.54 C 6.83 11.76, 11.59 19.51, 14.09 17.08"
      }
    ],
    [
      "path",
      {
        "d": "M 4.73 4.58 C 11.43 19.03, 13.86 14.25, 21.26 21.14"
      }
    ]
  ]
};

export const VisieraMagic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.84 9.02 C 19.59 14.40, 16.44 19.97, 21.38 17.40" />
      <path d="M 3.85 5.97 C 4.00 8.59, 11.08 10.92, 14.40 18.31" />
      <path d="M 6.31 8.54 C 6.83 11.76, 11.59 19.51, 14.09 17.08" />
      <path d="M 4.73 4.58 C 11.43 19.03, 13.86 14.25, 21.26 21.14" />
      {children}
    </svg>
  );
});

export default VisieraMagic;
