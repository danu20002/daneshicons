import React from 'react';

export const iconData = {
  "id": "VenaMaid",
  "name": "VenaMaid",
  "category": "AX",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.86 9.14 L 12.86 9.14"
      }
    ],
    [
      "path",
      {
        "d": "M 16.04 10.71 L 14.04 14.18"
      }
    ],
    [
      "path",
      {
        "d": "M 11.09 16.15 L 9.09 12.68"
      }
    ]
  ]
};

export const VenaMaid = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.86 9.14 L 12.86 9.14" />
      <path d="M 16.04 10.71 L 14.04 14.18" />
      <path d="M 11.09 16.15 L 9.09 12.68" />
      {children}
    </svg>
  );
});

export default VenaMaid;
