import React from 'react';

export const iconData = {
  "id": "IschoCamel",
  "name": "IschoCamel",
  "category": "XO",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.13 10.19 L 11.13 10.19"
      }
    ],
    [
      "path",
      {
        "d": "M 11.13 6.87 L 13.13 10.34"
      }
    ],
    [
      "path",
      {
        "d": "M 16.00 8.68 L 14.00 12.15"
      }
    ],
    [
      "path",
      {
        "d": "M 16.87 13.81 L 12.87 13.81"
      }
    ],
    [
      "path",
      {
        "d": "M 12.87 17.13 L 10.87 13.66"
      }
    ],
    [
      "path",
      {
        "d": "M 8.00 15.32 L 10.00 11.85"
      }
    ]
  ]
};

export const IschoCamel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.13 10.19 L 11.13 10.19" />
      <path d="M 11.13 6.87 L 13.13 10.34" />
      <path d="M 16.00 8.68 L 14.00 12.15" />
      <path d="M 16.87 13.81 L 12.87 13.81" />
      <path d="M 12.87 17.13 L 10.87 13.66" />
      <path d="M 8.00 15.32 L 10.00 11.85" />
      {children}
    </svg>
  );
});

export default IschoCamel;
