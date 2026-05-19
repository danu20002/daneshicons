import React from 'react';

export const iconData = {
  "id": "UlulaLens",
  "name": "UlulaLens",
  "category": "FV",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.94 12.00 a 2.06 2.06 0 1 0 4.12 0 a 2.06 2.06 0 1 0 -4.12 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.24 12.00 a 4.76 4.76 0 1 0 9.52 0 a 4.76 4.76 0 1 0 -9.52 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.44 12.00 a 7.56 7.56 0 1 0 15.11 0 a 7.56 7.56 0 1 0 -15.11 0"
      }
    ]
  ]
};

export const UlulaLens = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.94 12.00 a 2.06 2.06 0 1 0 4.12 0 a 2.06 2.06 0 1 0 -4.12 0" />
      <path d="M 7.24 12.00 a 4.76 4.76 0 1 0 9.52 0 a 4.76 4.76 0 1 0 -9.52 0" />
      <path d="M 4.44 12.00 a 7.56 7.56 0 1 0 15.11 0 a 7.56 7.56 0 1 0 -15.11 0" />
      {children}
    </svg>
  );
});

export default UlulaLens;
