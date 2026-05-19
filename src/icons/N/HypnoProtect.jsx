import React from 'react';

export const iconData = {
  "id": "HypnoProtect",
  "name": "HypnoProtect",
  "category": "N",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.02 12.00 L 16.98 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.98 12.00 L 13.77 10.07"
      }
    ],
    [
      "path",
      {
        "d": "M 16.98 12.00 L 13.77 13.93"
      }
    ]
  ]
};

export const HypnoProtect = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.02 12.00 L 16.98 12.00" />
      <path d="M 16.98 12.00 L 13.77 10.07" />
      <path d="M 16.98 12.00 L 13.77 13.93" />
      {children}
    </svg>
  );
});

export default HypnoProtect;
