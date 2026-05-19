import React from 'react';

export const iconData = {
  "id": "VenaDojo",
  "name": "VenaDojo",
  "category": "VJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.57 12.00 L 19.43 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.57 L 12.00 19.43"
      }
    ],
    [
      "path",
      {
        "d": "M 1.90 12.00 a 10.10 10.10 0 1 0 20.21 0 a 10.10 10.10 0 1 0 -20.21 0"
      }
    ]
  ]
};

export const VenaDojo = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.57 12.00 L 19.43 12.00" />
      <path d="M 12.00 4.57 L 12.00 19.43" />
      <path d="M 1.90 12.00 a 10.10 10.10 0 1 0 20.21 0 a 10.10 10.10 0 1 0 -20.21 0" />
      {children}
    </svg>
  );
});

export default VenaDojo;
