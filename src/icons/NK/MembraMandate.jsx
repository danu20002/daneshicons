import React from 'react';

export const iconData = {
  "id": "MembraMandate",
  "name": "MembraMandate",
  "category": "NK",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.25 12.00 L 16.75 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.75 12.00 L 13.74 10.19"
      }
    ],
    [
      "path",
      {
        "d": "M 16.75 12.00 L 13.74 13.81"
      }
    ]
  ]
};

export const MembraMandate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.25 12.00 L 16.75 12.00" />
      <path d="M 16.75 12.00 L 13.74 10.19" />
      <path d="M 16.75 12.00 L 13.74 13.81" />
      {children}
    </svg>
  );
});

export default MembraMandate;
