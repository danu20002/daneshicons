import React from 'react';

export const iconData = {
  "id": "VolumeCargo",
  "name": "VolumeCargo",
  "category": "LD",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.35 11.76 L 14.35 11.76"
      }
    ],
    [
      "path",
      {
        "d": "M 11.72 10.35 L 12.96 14.16"
      }
    ],
    [
      "path",
      {
        "d": "M 13.48 11.22 L 10.24 13.58"
      }
    ],
    [
      "path",
      {
        "d": "M 13.19 13.17 L 9.96 10.81"
      }
    ],
    [
      "path",
      {
        "d": "M 11.26 13.50 L 12.50 9.69"
      }
    ]
  ]
};

export const VolumeCargo = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.35 11.76 L 14.35 11.76" />
      <path d="M 11.72 10.35 L 12.96 14.16" />
      <path d="M 13.48 11.22 L 10.24 13.58" />
      <path d="M 13.19 13.17 L 9.96 10.81" />
      <path d="M 11.26 13.50 L 12.50 9.69" />
      {children}
    </svg>
  );
});

export default VolumeCargo;
