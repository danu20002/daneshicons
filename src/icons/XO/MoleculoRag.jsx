import React from 'react';

export const iconData = {
  "id": "MoleculoRag",
  "name": "MoleculoRag",
  "category": "XO",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.40 12.00 L 18.60 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.40 L 12.00 18.60"
      }
    ],
    [
      "path",
      {
        "d": "M 2.28 12.00 a 9.72 9.72 0 1 0 19.44 0 a 9.72 9.72 0 1 0 -19.44 0"
      }
    ]
  ]
};

export const MoleculoRag = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.40 12.00 L 18.60 12.00" />
      <path d="M 12.00 5.40 L 12.00 18.60" />
      <path d="M 2.28 12.00 a 9.72 9.72 0 1 0 19.44 0 a 9.72 9.72 0 1 0 -19.44 0" />
      {children}
    </svg>
  );
});

export default MoleculoRag;
