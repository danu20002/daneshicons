import React from 'react';

export const iconData = {
  "id": "SpiriSearch",
  "name": "SpiriSearch",
  "category": "CJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.99 12.00 L 18.01 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.99 L 12.00 18.01"
      }
    ],
    [
      "path",
      {
        "d": "M 2.65 12.00 a 9.35 9.35 0 1 0 18.69 0 a 9.35 9.35 0 1 0 -18.69 0"
      }
    ]
  ]
};

export const SpiriSearch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.99 12.00 L 18.01 12.00" />
      <path d="M 12.00 5.99 L 12.00 18.01" />
      <path d="M 2.65 12.00 a 9.35 9.35 0 1 0 18.69 0 a 9.35 9.35 0 1 0 -18.69 0" />
      {children}
    </svg>
  );
});

export default SpiriSearch;
