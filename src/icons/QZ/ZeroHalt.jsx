import React from 'react';

export const iconData = {
  "id": "ZeroHalt",
  "name": "ZeroHalt",
  "category": "QZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.56 12.00 Q 14.22 14.22 12.00 21.56"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 21.56 Q 9.78 14.22 2.44 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.44 12.00 Q 9.78 9.78 12.00 2.44"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.44 Q 14.22 9.78 21.56 12.00"
      }
    ]
  ]
};

export const ZeroHalt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.56 12.00 Q 14.22 14.22 12.00 21.56" />
      <path d="M 12.00 21.56 Q 9.78 14.22 2.44 12.00" />
      <path d="M 2.44 12.00 Q 9.78 9.78 12.00 2.44" />
      <path d="M 12.00 2.44 Q 14.22 9.78 21.56 12.00" />
      {children}
    </svg>
  );
});

export default ZeroHalt;
