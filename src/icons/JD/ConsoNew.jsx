import React from 'react';

export const iconData = {
  "id": "ConsoNew",
  "name": "ConsoNew",
  "category": "JD",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.83 12.00 a 8.17 8.17 0 1 0 16.33 0 a 8.17 8.17 0 1 0 -16.33 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.30 9.28 a 7.70 2.310076964970973 0 1 0 15.40 0 a 7.70 2.310076964970973 0 1 0 -15.40 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.30 14.72 a 7.70 2.310076964970973 0 1 0 15.40 0 a 7.70 2.310076964970973 0 1 0 -15.40 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.83 A 2 2 0 0 0 12.00 20.17"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.83 A 2 2 0 0 1 12.00 20.17"
      }
    ]
  ]
};

export const ConsoNew = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.83 12.00 a 8.17 8.17 0 1 0 16.33 0 a 8.17 8.17 0 1 0 -16.33 0" />
      <path d="M 4.30 9.28 a 7.70 2.310076964970973 0 1 0 15.40 0 a 7.70 2.310076964970973 0 1 0 -15.40 0" />
      <path d="M 4.30 14.72 a 7.70 2.310076964970973 0 1 0 15.40 0 a 7.70 2.310076964970973 0 1 0 -15.40 0" />
      <path d="M 12.00 3.83 A 2 2 0 0 0 12.00 20.17" />
      <path d="M 12.00 3.83 A 2 2 0 0 1 12.00 20.17" />
      {children}
    </svg>
  );
});

export default ConsoNew;
