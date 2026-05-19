import React from 'react';

export const iconData = {
  "id": "VocaleOnyx",
  "name": "VocaleOnyx",
  "category": "VL",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.92 12.00 L 17.08 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.92 12.00 L 10.68 9.75"
      }
    ],
    [
      "path",
      {
        "d": "M 6.92 12.00 L 10.68 14.25"
      }
    ]
  ]
};

export const VocaleOnyx = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.92 12.00 L 17.08 12.00" />
      <path d="M 6.92 12.00 L 10.68 9.75" />
      <path d="M 6.92 12.00 L 10.68 14.25" />
      {children}
    </svg>
  );
});

export default VocaleOnyx;
