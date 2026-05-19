import React from 'react';

export const iconData = {
  "id": "RhodoFlush",
  "name": "RhodoFlush",
  "category": "OV",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.34 3.56 L 19.23 19.26 L 4.54 6.82 L 17.11 17.96 L 3.91 18.09 L 17.35 12.90"
      }
    ],
    [
      "path",
      {
        "d": "M 4.04 11.86 C 10.45 16.48, 19.32 16.17, 18.34 8.98"
      }
    ],
    [
      "path",
      {
        "d": "M 5.63 20.38 A 5.98 4.87 54 0 1 11.50 14.17"
      }
    ],
    [
      "path",
      {
        "d": "M 16.43 16.24 C 14.02 12.16, 6.64 15.57, 2.15 4.32"
      }
    ],
    [
      "path",
      {
        "d": "M 15.69 3.68 Q 18.79 4.47 9.25 2.42"
      }
    ]
  ]
};

export const RhodoFlush = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.34 3.56 L 19.23 19.26 L 4.54 6.82 L 17.11 17.96 L 3.91 18.09 L 17.35 12.90" />
      <path d="M 4.04 11.86 C 10.45 16.48, 19.32 16.17, 18.34 8.98" />
      <path d="M 5.63 20.38 A 5.98 4.87 54 0 1 11.50 14.17" />
      <path d="M 16.43 16.24 C 14.02 12.16, 6.64 15.57, 2.15 4.32" />
      <path d="M 15.69 3.68 Q 18.79 4.47 9.25 2.42" />
      {children}
    </svg>
  );
});

export default RhodoFlush;
