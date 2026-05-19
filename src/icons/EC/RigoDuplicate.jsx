import React from 'react';

export const iconData = {
  "id": "RigoDuplicate",
  "name": "RigoDuplicate",
  "category": "EC",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.81 12.00 a 7.19 7.19 0 1 0 14.39 0 a 7.19 7.19 0 1 0 -14.39 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.51 12.00 a 4.49 4.49 0 1 1 8.98 0 a 4.49 4.49 0 1 1 -8.98 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.69 12.00 L 20.69 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.35 17.80 L 16.35 19.53"
      }
    ],
    [
      "path",
      {
        "d": "M 8.65 17.80 L 7.65 19.53"
      }
    ],
    [
      "path",
      {
        "d": "M 5.31 12.00 L 3.31 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.65 6.20 L 7.65 4.47"
      }
    ],
    [
      "path",
      {
        "d": "M 15.35 6.20 L 16.35 4.47"
      }
    ]
  ]
};

export const RigoDuplicate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.81 12.00 a 7.19 7.19 0 1 0 14.39 0 a 7.19 7.19 0 1 0 -14.39 0" />
      <path d="M 7.51 12.00 a 4.49 4.49 0 1 1 8.98 0 a 4.49 4.49 0 1 1 -8.98 0" />
      <path d="M 18.69 12.00 L 20.69 12.00" />
      <path d="M 15.35 17.80 L 16.35 19.53" />
      <path d="M 8.65 17.80 L 7.65 19.53" />
      <path d="M 5.31 12.00 L 3.31 12.00" />
      <path d="M 8.65 6.20 L 7.65 4.47" />
      <path d="M 15.35 6.20 L 16.35 4.47" />
      {children}
    </svg>
  );
});

export default RigoDuplicate;
