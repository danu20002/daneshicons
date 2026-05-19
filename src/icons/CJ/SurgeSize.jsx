import React from 'react';

export const iconData = {
  "id": "SurgeSize",
  "name": "SurgeSize",
  "category": "CJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.78 12.00 Q 15.20 13.85 16.39 19.60"
      }
    ],
    [
      "path",
      {
        "d": "M 16.39 19.60 Q 12.00 15.70 7.61 19.60"
      }
    ],
    [
      "path",
      {
        "d": "M 7.61 19.60 Q 8.80 13.85 3.22 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.22 12.00 Q 8.80 10.15 7.61 4.40"
      }
    ],
    [
      "path",
      {
        "d": "M 7.61 4.40 Q 12.00 8.30 16.39 4.40"
      }
    ],
    [
      "path",
      {
        "d": "M 16.39 4.40 Q 15.20 10.15 20.78 12.00"
      }
    ]
  ]
};

export const SurgeSize = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.78 12.00 Q 15.20 13.85 16.39 19.60" />
      <path d="M 16.39 19.60 Q 12.00 15.70 7.61 19.60" />
      <path d="M 7.61 19.60 Q 8.80 13.85 3.22 12.00" />
      <path d="M 3.22 12.00 Q 8.80 10.15 7.61 4.40" />
      <path d="M 7.61 4.40 Q 12.00 8.30 16.39 4.40" />
      <path d="M 16.39 4.40 Q 15.20 10.15 20.78 12.00" />
      {children}
    </svg>
  );
});

export default SurgeSize;
