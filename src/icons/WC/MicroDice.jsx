import React from 'react';

export const iconData = {
  "id": "MicroDice",
  "name": "MicroDice",
  "category": "WC",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.07 9.01 L 12.07 9.01"
      }
    ],
    [
      "path",
      {
        "d": "M 13.63 7.33 L 14.86 11.14"
      }
    ],
    [
      "path",
      {
        "d": "M 16.94 12.11 L 13.70 14.46"
      }
    ],
    [
      "path",
      {
        "d": "M 13.43 16.73 L 10.19 14.38"
      }
    ],
    [
      "path",
      {
        "d": "M 7.94 14.82 L 9.18 11.01"
      }
    ]
  ]
};

export const MicroDice = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.07 9.01 L 12.07 9.01" />
      <path d="M 13.63 7.33 L 14.86 11.14" />
      <path d="M 16.94 12.11 L 13.70 14.46" />
      <path d="M 13.43 16.73 L 10.19 14.38" />
      <path d="M 7.94 14.82 L 9.18 11.01" />
      {children}
    </svg>
  );
});

export default MicroDice;
