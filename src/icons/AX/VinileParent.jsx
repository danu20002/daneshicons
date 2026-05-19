import React from 'react';

export const iconData = {
  "id": "VinileParent",
  "name": "VinileParent",
  "category": "AX",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.65 12.00 L 20.35 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.65 L 12.00 20.35"
      }
    ],
    [
      "path",
      {
        "d": "M 6.16 6.16 L 17.84 17.84"
      }
    ],
    [
      "path",
      {
        "d": "M 6.16 17.84 L 17.84 6.16"
      }
    ],
    [
      "path",
      {
        "d": "M 1.09 12.00 a 10.91 10.91 0 1 0 21.82 0 a 10.91 10.91 0 1 0 -21.82 0"
      }
    ]
  ]
};

export const VinileParent = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.65 12.00 L 20.35 12.00" />
      <path d="M 12.00 3.65 L 12.00 20.35" />
      <path d="M 6.16 6.16 L 17.84 17.84" />
      <path d="M 6.16 17.84 L 17.84 6.16" />
      <path d="M 1.09 12.00 a 10.91 10.91 0 1 0 21.82 0 a 10.91 10.91 0 1 0 -21.82 0" />
      {children}
    </svg>
  );
});

export default VinileParent;
