import React from 'react';

export const iconData = {
  "id": "DorsoProtest",
  "name": "DorsoProtest",
  "category": "DC",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.89 12.00 L 20.11 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.89 L 12.00 20.11"
      }
    ],
    [
      "path",
      {
        "d": "M 6.32 6.32 L 17.68 17.68"
      }
    ],
    [
      "path",
      {
        "d": "M 6.32 17.68 L 17.68 6.32"
      }
    ],
    [
      "path",
      {
        "d": "M 2.17 12.00 a 9.83 9.83 0 1 0 19.65 0 a 9.83 9.83 0 1 0 -19.65 0"
      }
    ]
  ]
};

export const DorsoProtest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.89 12.00 L 20.11 12.00" />
      <path d="M 12.00 3.89 L 12.00 20.11" />
      <path d="M 6.32 6.32 L 17.68 17.68" />
      <path d="M 6.32 17.68 L 17.68 6.32" />
      <path d="M 2.17 12.00 a 9.83 9.83 0 1 0 19.65 0 a 9.83 9.83 0 1 0 -19.65 0" />
      {children}
    </svg>
  );
});

export default DorsoProtest;
