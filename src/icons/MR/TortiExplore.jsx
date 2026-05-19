import React from 'react';

export const iconData = {
  "id": "TortiExplore",
  "name": "TortiExplore",
  "category": "MR",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.50 12.00 L 15.50 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.50 12.00 L 11.61 9.67"
      }
    ],
    [
      "path",
      {
        "d": "M 15.50 12.00 L 11.61 14.33"
      }
    ]
  ]
};

export const TortiExplore = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.50 12.00 L 15.50 12.00" />
      <path d="M 15.50 12.00 L 11.61 9.67" />
      <path d="M 15.50 12.00 L 11.61 14.33" />
      {children}
    </svg>
  );
});

export default TortiExplore;
