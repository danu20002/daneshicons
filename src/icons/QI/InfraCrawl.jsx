import React from 'react';

export const iconData = {
  "id": "InfraCrawl",
  "name": "InfraCrawl",
  "category": "QI",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.70 12.00 L 17.30 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.30 12.00 L 13.58 9.77"
      }
    ],
    [
      "path",
      {
        "d": "M 17.30 12.00 L 13.58 14.23"
      }
    ]
  ]
};

export const InfraCrawl = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.70 12.00 L 17.30 12.00" />
      <path d="M 17.30 12.00 L 13.58 9.77" />
      <path d="M 17.30 12.00 L 13.58 14.23" />
      {children}
    </svg>
  );
});

export default InfraCrawl;
