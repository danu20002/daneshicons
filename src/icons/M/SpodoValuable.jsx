import React from 'react';

export const iconData = {
  "id": "SpodoValuable",
  "name": "SpodoValuable",
  "category": "M",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.56 5.71 Q 13.19 12.29 20.11 3.56"
      }
    ],
    [
      "path",
      {
        "d": "M 6.70 16.03 A 3.84 3.86 117 0 0 19.84 15.05"
      }
    ],
    [
      "path",
      {
        "d": "M 15.41 10.17 A 3.61 6.52 19 0 0 7.63 18.15"
      }
    ],
    [
      "path",
      {
        "d": "M 11.52 9.17 L 6.85 8.70"
      }
    ]
  ]
};

export const SpodoValuable = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.56 5.71 Q 13.19 12.29 20.11 3.56" />
      <path d="M 6.70 16.03 A 3.84 3.86 117 0 0 19.84 15.05" />
      <path d="M 15.41 10.17 A 3.61 6.52 19 0 0 7.63 18.15" />
      <path d="M 11.52 9.17 L 6.85 8.70" />
      {children}
    </svg>
  );
});

export default SpodoValuable;
