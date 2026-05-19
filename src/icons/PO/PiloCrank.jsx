import React from 'react';

export const iconData = {
  "id": "PiloCrank",
  "name": "PiloCrank",
  "category": "PO",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.95 21.99 L 11.48 15.25"
      }
    ],
    [
      "path",
      {
        "d": "M 19.06 17.30 C 4.65 7.66, 21.78 10.46, 16.10 2.11"
      }
    ],
    [
      "path",
      {
        "d": "M 21.16 14.55 C 15.50 11.92, 7.02 9.35, 20.25 3.98"
      }
    ],
    [
      "path",
      {
        "d": "M 14.56 3.31 Q 10.43 17.79 2.92 19.26"
      }
    ]
  ]
};

export const PiloCrank = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.95 21.99 L 11.48 15.25" />
      <path d="M 19.06 17.30 C 4.65 7.66, 21.78 10.46, 16.10 2.11" />
      <path d="M 21.16 14.55 C 15.50 11.92, 7.02 9.35, 20.25 3.98" />
      <path d="M 14.56 3.31 Q 10.43 17.79 2.92 19.26" />
      {children}
    </svg>
  );
});

export default PiloCrank;
