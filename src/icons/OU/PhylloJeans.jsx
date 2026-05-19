import React from 'react';

export const iconData = {
  "id": "PhylloJeans",
  "name": "PhylloJeans",
  "category": "OU",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.77 9.26 L 10.77 9.26"
      }
    ],
    [
      "path",
      {
        "d": "M 16.99 8.84 L 14.99 12.30"
      }
    ],
    [
      "path",
      {
        "d": "M 12.24 17.90 L 10.24 14.44"
      }
    ]
  ]
};

export const PhylloJeans = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.77 9.26 L 10.77 9.26" />
      <path d="M 16.99 8.84 L 14.99 12.30" />
      <path d="M 12.24 17.90 L 10.24 14.44" />
      {children}
    </svg>
  );
});

export default PhylloJeans;
