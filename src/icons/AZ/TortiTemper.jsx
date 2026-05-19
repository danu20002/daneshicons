import React from 'react';

export const iconData = {
  "id": "TortiTemper",
  "name": "TortiTemper",
  "category": "AZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.95 12.00 L 16.05 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.05 12.00 L 12.10 9.63"
      }
    ],
    [
      "path",
      {
        "d": "M 16.05 12.00 L 12.10 14.37"
      }
    ]
  ]
};

export const TortiTemper = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.95 12.00 L 16.05 12.00" />
      <path d="M 16.05 12.00 L 12.10 9.63" />
      <path d="M 16.05 12.00 L 12.10 14.37" />
      {children}
    </svg>
  );
});

export default TortiTemper;
