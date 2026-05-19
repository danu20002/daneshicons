import React from 'react';

export const iconData = {
  "id": "VirgolaGarb",
  "name": "VirgolaGarb",
  "category": "FH",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.21 12.00 Q 16.32 14.49 16.60 19.97"
      }
    ],
    [
      "path",
      {
        "d": "M 16.60 19.97 Q 12.00 16.99 7.40 19.97"
      }
    ],
    [
      "path",
      {
        "d": "M 7.40 19.97 Q 7.68 14.49 2.79 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.79 12.00 Q 7.68 9.51 7.40 4.03"
      }
    ],
    [
      "path",
      {
        "d": "M 7.40 4.03 Q 12.00 7.01 16.60 4.03"
      }
    ],
    [
      "path",
      {
        "d": "M 16.60 4.03 Q 16.32 9.51 21.21 12.00"
      }
    ]
  ]
};

export const VirgolaGarb = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.21 12.00 Q 16.32 14.49 16.60 19.97" />
      <path d="M 16.60 19.97 Q 12.00 16.99 7.40 19.97" />
      <path d="M 7.40 19.97 Q 7.68 14.49 2.79 12.00" />
      <path d="M 2.79 12.00 Q 7.68 9.51 7.40 4.03" />
      <path d="M 7.40 4.03 Q 12.00 7.01 16.60 4.03" />
      <path d="M 16.60 4.03 Q 16.32 9.51 21.21 12.00" />
      {children}
    </svg>
  );
});

export default VirgolaGarb;
