import React from 'react';

export const iconData = {
  "id": "VongolaVeneer",
  "name": "VongolaVeneer",
  "category": "EQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.62 12.00 L 17.38 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.38 12.00 L 12.45 9.04"
      }
    ],
    [
      "path",
      {
        "d": "M 17.38 12.00 L 12.45 14.96"
      }
    ]
  ]
};

export const VongolaVeneer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.62 12.00 L 17.38 12.00" />
      <path d="M 17.38 12.00 L 12.45 9.04" />
      <path d="M 17.38 12.00 L 12.45 14.96" />
      {children}
    </svg>
  );
});

export default VongolaVeneer;
