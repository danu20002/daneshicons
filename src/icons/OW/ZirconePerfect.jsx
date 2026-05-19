import React from 'react';

export const iconData = {
  "id": "ZirconePerfect",
  "name": "ZirconePerfect",
  "category": "OW",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.37 13.47 L 15.41 20.85 L 6.04 19.38 L 2.63 10.53 L 8.59 3.15 L 17.96 4.62 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.31 14.84 L 12.20 18.02 L 6.88 15.18 L 6.69 9.16 L 11.80 5.98 L 17.12 8.82 Z"
      }
    ]
  ]
};

export const ZirconePerfect = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.37 13.47 L 15.41 20.85 L 6.04 19.38 L 2.63 10.53 L 8.59 3.15 L 17.96 4.62 Z" />
      <path d="M 17.31 14.84 L 12.20 18.02 L 6.88 15.18 L 6.69 9.16 L 11.80 5.98 L 17.12 8.82 Z" />
      {children}
    </svg>
  );
});

export default ZirconePerfect;
