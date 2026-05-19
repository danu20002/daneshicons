import React from 'react';

export const iconData = {
  "id": "CyanoChain",
  "name": "CyanoChain",
  "category": "AY",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.06 7.08 A 6.87 3.54 49 0 0 16.92 10.43"
      }
    ],
    [
      "path",
      {
        "d": "M 2.71 5.35 C 16.95 9.82, 11.84 15.80, 19.62 18.41"
      }
    ],
    [
      "path",
      {
        "d": "M 8.09 21.68 Q 9.00 16.82 13.61 6.60"
      }
    ]
  ]
};

export const CyanoChain = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.06 7.08 A 6.87 3.54 49 0 0 16.92 10.43" />
      <path d="M 2.71 5.35 C 16.95 9.82, 11.84 15.80, 19.62 18.41" />
      <path d="M 8.09 21.68 Q 9.00 16.82 13.61 6.60" />
      {children}
    </svg>
  );
});

export default CyanoChain;
