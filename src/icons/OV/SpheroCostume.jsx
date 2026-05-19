import React from 'react';

export const iconData = {
  "id": "SpheroCostume",
  "name": "SpheroCostume",
  "category": "OV",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.21 8.42 A 4.85 6.69 86 0 1 12.91 14.67"
      }
    ],
    [
      "path",
      {
        "d": "M 10.21 17.31 L 13.54 13.81"
      }
    ],
    [
      "path",
      {
        "d": "M 9.52 9.54 Q 16.95 2.08 2.97 16.26"
      }
    ],
    [
      "path",
      {
        "d": "M 17.46 8.72 L 16.38 2.29 L 15.91 20.46 L 15.88 14.90"
      }
    ],
    [
      "path",
      {
        "d": "M 20.39 19.58 Q 10.31 13.44 5.86 9.39"
      }
    ]
  ]
};

export const SpheroCostume = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.21 8.42 A 4.85 6.69 86 0 1 12.91 14.67" />
      <path d="M 10.21 17.31 L 13.54 13.81" />
      <path d="M 9.52 9.54 Q 16.95 2.08 2.97 16.26" />
      <path d="M 17.46 8.72 L 16.38 2.29 L 15.91 20.46 L 15.88 14.90" />
      <path d="M 20.39 19.58 Q 10.31 13.44 5.86 9.39" />
      {children}
    </svg>
  );
});

export default SpheroCostume;
