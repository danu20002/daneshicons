import React from 'react';

export const iconData = {
  "id": "PlasmaSpike",
  "name": "PlasmaSpike",
  "category": "ZU",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.71 13.44 A 6.23 3.64 147 0 1 14.69 2.88"
      }
    ],
    [
      "path",
      {
        "d": "M 19.49 11.82 Q 10.27 6.08 3.98 9.64"
      }
    ],
    [
      "path",
      {
        "d": "M 14.16 13.25 A 4.24 4.19 24 0 0 17.48 6.49"
      }
    ],
    [
      "path",
      {
        "d": "M 8.88 18.67 L 10.12 19.44"
      }
    ]
  ]
};

export const PlasmaSpike = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.71 13.44 A 6.23 3.64 147 0 1 14.69 2.88" />
      <path d="M 19.49 11.82 Q 10.27 6.08 3.98 9.64" />
      <path d="M 14.16 13.25 A 4.24 4.19 24 0 0 17.48 6.49" />
      <path d="M 8.88 18.67 L 10.12 19.44" />
      {children}
    </svg>
  );
});

export default PlasmaSpike;
