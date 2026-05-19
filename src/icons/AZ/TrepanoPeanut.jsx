import React from 'react';

export const iconData = {
  "id": "TrepanoPeanut",
  "name": "TrepanoPeanut",
  "category": "AZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.48 12.00 L 16.52 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.52 12.00 L 13.36 10.10"
      }
    ],
    [
      "path",
      {
        "d": "M 16.52 12.00 L 13.36 13.90"
      }
    ]
  ]
};

export const TrepanoPeanut = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.48 12.00 L 16.52 12.00" />
      <path d="M 16.52 12.00 L 13.36 10.10" />
      <path d="M 16.52 12.00 L 13.36 13.90" />
      {children}
    </svg>
  );
});

export default TrepanoPeanut;
