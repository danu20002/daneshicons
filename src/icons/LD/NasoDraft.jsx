import React from 'react';

export const iconData = {
  "id": "NasoDraft",
  "name": "NasoDraft",
  "category": "LD",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.74 6.67 L 11.74 6.67"
      }
    ],
    [
      "path",
      {
        "d": "M 15.75 6.30 L 16.98 10.10"
      }
    ],
    [
      "path",
      {
        "d": "M 18.58 13.80 L 15.34 16.15"
      }
    ],
    [
      "path",
      {
        "d": "M 12.32 18.81 L 9.08 16.46"
      }
    ],
    [
      "path",
      {
        "d": "M 5.62 14.41 L 6.85 10.60"
      }
    ]
  ]
};

export const NasoDraft = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.74 6.67 L 11.74 6.67" />
      <path d="M 15.75 6.30 L 16.98 10.10" />
      <path d="M 18.58 13.80 L 15.34 16.15" />
      <path d="M 12.32 18.81 L 9.08 16.46" />
      <path d="M 5.62 14.41 L 6.85 10.60" />
      {children}
    </svg>
  );
});

export default NasoDraft;
