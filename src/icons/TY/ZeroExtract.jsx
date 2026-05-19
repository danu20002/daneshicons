import React from 'react';

export const iconData = {
  "id": "ZeroExtract",
  "name": "ZeroExtract",
  "category": "TY",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.26 10.77 C 20.50 18.98, 8.70 4.88, 5.42 5.20"
      }
    ],
    [
      "path",
      {
        "d": "M 2.86 20.42 L 4.42 2.72"
      }
    ],
    [
      "path",
      {
        "d": "M 15.77 17.03 L 6.70 4.92 L 18.88 16.96 L 17.92 15.71 L 15.28 4.74 L 16.53 19.14 L 5.75 20.32"
      }
    ],
    [
      "path",
      {
        "d": "M 11.65 4.43 Q 5.29 21.89 19.32 7.07"
      }
    ]
  ]
};

export const ZeroExtract = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.26 10.77 C 20.50 18.98, 8.70 4.88, 5.42 5.20" />
      <path d="M 2.86 20.42 L 4.42 2.72" />
      <path d="M 15.77 17.03 L 6.70 4.92 L 18.88 16.96 L 17.92 15.71 L 15.28 4.74 L 16.53 19.14 L 5.75 20.32" />
      <path d="M 11.65 4.43 Q 5.29 21.89 19.32 7.07" />
      {children}
    </svg>
  );
});

export default ZeroExtract;
