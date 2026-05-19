import React from 'react';

export const iconData = {
  "id": "DilithioTalent",
  "name": "DilithioTalent",
  "category": "AS",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.82 12.00 a 2.18 2.18 0 1 0 4.35 0 a 2.18 2.18 0 1 0 -4.35 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.85 12.00 a 4.15 4.15 0 1 0 8.30 0 a 4.15 4.15 0 1 0 -8.30 0",
        "stroke-dasharray": "4 2"
      }
    ],
    [
      "path",
      {
        "d": "M 5.58 12.00 a 6.42 6.42 0 1 0 12.84 0 a 6.42 6.42 0 1 0 -12.84 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.73 12.00 a 8.27 8.27 0 1 0 16.53 0 a 8.27 8.27 0 1 0 -16.53 0"
      }
    ]
  ]
};

export const DilithioTalent = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.82 12.00 a 2.18 2.18 0 1 0 4.35 0 a 2.18 2.18 0 1 0 -4.35 0" />
      <path d="M 7.85 12.00 a 4.15 4.15 0 1 0 8.30 0 a 4.15 4.15 0 1 0 -8.30 0" stroke-dasharray="4 2" />
      <path d="M 5.58 12.00 a 6.42 6.42 0 1 0 12.84 0 a 6.42 6.42 0 1 0 -12.84 0" />
      <path d="M 3.73 12.00 a 8.27 8.27 0 1 0 16.53 0 a 8.27 8.27 0 1 0 -16.53 0" />
      {children}
    </svg>
  );
});

export default DilithioTalent;
