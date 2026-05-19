import React from 'react';

export const iconData = {
  "id": "QuadraMascot",
  "name": "QuadraMascot",
  "category": "AL",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.18 12.00 a 8.82 8.82 0 1 0 17.65 0 a 8.82 8.82 0 1 0 -17.65 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.53 12.00 a 6.47 6.47 0 1 1 12.93 0 a 6.47 6.47 0 1 1 -12.93 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.32 12.00 L 22.32 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.38 17.35 L 19.91 18.64"
      }
    ],
    [
      "path",
      {
        "d": "M 13.45 20.20 L 13.79 22.17"
      }
    ],
    [
      "path",
      {
        "d": "M 7.84 19.21 L 6.84 20.94"
      }
    ],
    [
      "path",
      {
        "d": "M 4.18 14.85 L 2.30 15.53"
      }
    ],
    [
      "path",
      {
        "d": "M 4.18 9.15 L 2.30 8.47"
      }
    ],
    [
      "path",
      {
        "d": "M 7.84 4.79 L 6.84 3.06"
      }
    ],
    [
      "path",
      {
        "d": "M 13.45 3.80 L 13.79 1.83"
      }
    ],
    [
      "path",
      {
        "d": "M 18.38 6.65 L 19.91 5.36"
      }
    ]
  ]
};

export const QuadraMascot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.18 12.00 a 8.82 8.82 0 1 0 17.65 0 a 8.82 8.82 0 1 0 -17.65 0" />
      <path d="M 5.53 12.00 a 6.47 6.47 0 1 1 12.93 0 a 6.47 6.47 0 1 1 -12.93 0" />
      <path d="M 20.32 12.00 L 22.32 12.00" />
      <path d="M 18.38 17.35 L 19.91 18.64" />
      <path d="M 13.45 20.20 L 13.79 22.17" />
      <path d="M 7.84 19.21 L 6.84 20.94" />
      <path d="M 4.18 14.85 L 2.30 15.53" />
      <path d="M 4.18 9.15 L 2.30 8.47" />
      <path d="M 7.84 4.79 L 6.84 3.06" />
      <path d="M 13.45 3.80 L 13.79 1.83" />
      <path d="M 18.38 6.65 L 19.91 5.36" />
      {children}
    </svg>
  );
});

export default QuadraMascot;
