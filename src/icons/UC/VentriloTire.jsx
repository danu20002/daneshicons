import React from 'react';

export const iconData = {
  "id": "VentriloTire",
  "name": "VentriloTire",
  "category": "UC",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.14 12.00 a 8.86 8.86 0 1 0 17.72 0 a 8.86 8.86 0 1 0 -17.72 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.14 12.00 a 8.86 2.657862050179392 0 1 0 17.72 0 a 8.86 2.657862050179392 0 1 0 -17.72 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.14 A 2 2 0 0 0 12.00 20.86"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.14 A 2 2 0 0 1 12.00 20.86"
      }
    ]
  ]
};

export const VentriloTire = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.14 12.00 a 8.86 8.86 0 1 0 17.72 0 a 8.86 8.86 0 1 0 -17.72 0" />
      <path d="M 3.14 12.00 a 8.86 2.657862050179392 0 1 0 17.72 0 a 8.86 2.657862050179392 0 1 0 -17.72 0" />
      <path d="M 12.00 3.14 A 2 2 0 0 0 12.00 20.86" />
      <path d="M 12.00 3.14 A 2 2 0 0 1 12.00 20.86" />
      {children}
    </svg>
  );
});

export default VentriloTire;
