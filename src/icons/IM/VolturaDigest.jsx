import React from 'react';

export const iconData = {
  "id": "VolturaDigest",
  "name": "VolturaDigest",
  "category": "IM",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.35 12.00 a 7.65 7.65 0 1 0 15.30 0 a 7.65 7.65 0 1 0 -15.30 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.35 12.00 a 4.65 4.65 0 1 1 9.30 0 a 4.65 4.65 0 1 1 -9.30 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.15 12.00 L 21.15 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.06 17.06 L 18.47 18.47"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.15 L 12.00 21.15"
      }
    ],
    [
      "path",
      {
        "d": "M 6.94 17.06 L 5.53 18.47"
      }
    ],
    [
      "path",
      {
        "d": "M 4.85 12.00 L 2.85 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.94 6.94 L 5.53 5.53"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.85 L 12.00 2.85"
      }
    ],
    [
      "path",
      {
        "d": "M 17.06 6.94 L 18.47 5.53"
      }
    ]
  ]
};

export const VolturaDigest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.35 12.00 a 7.65 7.65 0 1 0 15.30 0 a 7.65 7.65 0 1 0 -15.30 0" />
      <path d="M 7.35 12.00 a 4.65 4.65 0 1 1 9.30 0 a 4.65 4.65 0 1 1 -9.30 0" />
      <path d="M 19.15 12.00 L 21.15 12.00" />
      <path d="M 17.06 17.06 L 18.47 18.47" />
      <path d="M 12.00 19.15 L 12.00 21.15" />
      <path d="M 6.94 17.06 L 5.53 18.47" />
      <path d="M 4.85 12.00 L 2.85 12.00" />
      <path d="M 6.94 6.94 L 5.53 5.53" />
      <path d="M 12.00 4.85 L 12.00 2.85" />
      <path d="M 17.06 6.94 L 18.47 5.53" />
      {children}
    </svg>
  );
});

export default VolturaDigest;
