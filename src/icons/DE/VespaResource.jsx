import React from 'react';

export const iconData = {
  "id": "VespaResource",
  "name": "VespaResource",
  "category": "DE",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.63 12.00 L 16.37 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 7.63 12.00 L 12.34 9.17"
      }
    ],
    [
      "path",
      {
        "d": "M 7.63 12.00 L 12.34 14.83"
      }
    ]
  ]
};

export const VespaResource = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.63 12.00 L 16.37 12.00" />
      <path d="M 7.63 12.00 L 12.34 9.17" />
      <path d="M 7.63 12.00 L 12.34 14.83" />
      {children}
    </svg>
  );
});

export default VespaResource;
