import React from 'react';

export const iconData = {
  "id": "LacunoHeel",
  "name": "LacunoHeel",
  "category": "CQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.89 12.00 a 7.11 7.11 0 1 0 14.22 0 a 7.11 7.11 0 1 0 -14.22 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.70 12.00 a 4.30 4.30 0 1 1 8.61 0 a 4.30 4.30 0 1 1 -8.61 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.61 12.00 L 20.61 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.06 16.25 L 18.60 17.53"
      }
    ],
    [
      "path",
      {
        "d": "M 13.15 18.51 L 13.50 20.48"
      }
    ],
    [
      "path",
      {
        "d": "M 8.69 17.72 L 7.69 19.46"
      }
    ],
    [
      "path",
      {
        "d": "M 5.79 14.26 L 3.91 14.94"
      }
    ],
    [
      "path",
      {
        "d": "M 5.79 9.74 L 3.91 9.06"
      }
    ],
    [
      "path",
      {
        "d": "M 8.69 6.28 L 7.69 4.54"
      }
    ],
    [
      "path",
      {
        "d": "M 13.15 5.49 L 13.50 3.52"
      }
    ],
    [
      "path",
      {
        "d": "M 17.06 7.75 L 18.60 6.47"
      }
    ]
  ]
};

export const LacunoHeel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.89 12.00 a 7.11 7.11 0 1 0 14.22 0 a 7.11 7.11 0 1 0 -14.22 0" />
      <path d="M 7.70 12.00 a 4.30 4.30 0 1 1 8.61 0 a 4.30 4.30 0 1 1 -8.61 0" />
      <path d="M 18.61 12.00 L 20.61 12.00" />
      <path d="M 17.06 16.25 L 18.60 17.53" />
      <path d="M 13.15 18.51 L 13.50 20.48" />
      <path d="M 8.69 17.72 L 7.69 19.46" />
      <path d="M 5.79 14.26 L 3.91 14.94" />
      <path d="M 5.79 9.74 L 3.91 9.06" />
      <path d="M 8.69 6.28 L 7.69 4.54" />
      <path d="M 13.15 5.49 L 13.50 3.52" />
      <path d="M 17.06 7.75 L 18.60 6.47" />
      {children}
    </svg>
  );
});

export default LacunoHeel;
