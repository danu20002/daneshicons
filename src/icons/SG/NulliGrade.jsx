import React from 'react';

export const iconData = {
  "id": "NulliGrade",
  "name": "NulliGrade",
  "category": "SG",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.56 12.00 a 2.44 2.44 0 1 0 4.88 0 a 2.44 2.44 0 1 0 -4.88 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.98 12.00 a 4.02 4.02 0 1 0 8.04 0 a 4.02 4.02 0 1 0 -8.04 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.98 12.00 a 6.02 6.02 0 1 0 12.04 0 a 6.02 6.02 0 1 0 -12.04 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.59 12.00 a 8.41 8.41 0 1 0 16.83 0 a 8.41 8.41 0 1 0 -16.83 0"
      }
    ]
  ]
};

export const NulliGrade = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.56 12.00 a 2.44 2.44 0 1 0 4.88 0 a 2.44 2.44 0 1 0 -4.88 0" />
      <path d="M 7.98 12.00 a 4.02 4.02 0 1 0 8.04 0 a 4.02 4.02 0 1 0 -8.04 0" />
      <path d="M 5.98 12.00 a 6.02 6.02 0 1 0 12.04 0 a 6.02 6.02 0 1 0 -12.04 0" />
      <path d="M 3.59 12.00 a 8.41 8.41 0 1 0 16.83 0 a 8.41 8.41 0 1 0 -16.83 0" />
      {children}
    </svg>
  );
});

export default NulliGrade;
