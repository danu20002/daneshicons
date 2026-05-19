import React from 'react';

export const iconData = {
  "id": "ProtoProtect",
  "name": "ProtoProtect",
  "category": "KR",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.77 12.00 a 8.23 8.23 0 1 0 16.46 0 a 8.23 8.23 0 1 0 -16.46 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.82 12.00 a 6.18 6.18 0 1 1 12.37 0 a 6.18 6.18 0 1 1 -12.37 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.73 12.00 L 21.73 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.87 18.70 L 16.87 20.43"
      }
    ],
    [
      "path",
      {
        "d": "M 8.13 18.70 L 7.13 20.43"
      }
    ],
    [
      "path",
      {
        "d": "M 4.27 12.00 L 2.27 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.13 5.30 L 7.13 3.57"
      }
    ],
    [
      "path",
      {
        "d": "M 15.87 5.30 L 16.87 3.57"
      }
    ]
  ]
};

export const ProtoProtect = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.77 12.00 a 8.23 8.23 0 1 0 16.46 0 a 8.23 8.23 0 1 0 -16.46 0" />
      <path d="M 5.82 12.00 a 6.18 6.18 0 1 1 12.37 0 a 6.18 6.18 0 1 1 -12.37 0" />
      <path d="M 19.73 12.00 L 21.73 12.00" />
      <path d="M 15.87 18.70 L 16.87 20.43" />
      <path d="M 8.13 18.70 L 7.13 20.43" />
      <path d="M 4.27 12.00 L 2.27 12.00" />
      <path d="M 8.13 5.30 L 7.13 3.57" />
      <path d="M 15.87 5.30 L 16.87 3.57" />
      {children}
    </svg>
  );
});

export default ProtoProtect;
