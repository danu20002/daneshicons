import React from 'react';

export const iconData = {
  "id": "SymbioTea",
  "name": "SymbioTea",
  "category": "HN",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.56 21.04 L 16.24 11.45"
      }
    ],
    [
      "path",
      {
        "d": "M 10.33 4.30 C 8.61 4.44, 14.72 10.20, 16.02 19.56"
      }
    ],
    [
      "path",
      {
        "d": "M 6.46 8.43 Q 20.63 6.03 7.30 11.22"
      }
    ]
  ]
};

export const SymbioTea = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.56 21.04 L 16.24 11.45" />
      <path d="M 10.33 4.30 C 8.61 4.44, 14.72 10.20, 16.02 19.56" />
      <path d="M 6.46 8.43 Q 20.63 6.03 7.30 11.22" />
      {children}
    </svg>
  );
});

export default SymbioTea;
