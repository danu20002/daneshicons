import React from 'react';

export const iconData = {
  "id": "SpumosoVeneer",
  "name": "SpumosoVeneer",
  "category": "TX",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.75 10.00 L 10.75 10.00"
      }
    ],
    [
      "path",
      {
        "d": "M 14.00 6.75 L 14.00 10.75"
      }
    ],
    [
      "path",
      {
        "d": "M 17.25 14.00 L 13.25 14.00"
      }
    ],
    [
      "path",
      {
        "d": "M 10.00 17.25 L 10.00 13.25"
      }
    ]
  ]
};

export const SpumosoVeneer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.75 10.00 L 10.75 10.00" />
      <path d="M 14.00 6.75 L 14.00 10.75" />
      <path d="M 17.25 14.00 L 13.25 14.00" />
      <path d="M 10.00 17.25 L 10.00 13.25" />
      {children}
    </svg>
  );
});

export default SpumosoVeneer;
