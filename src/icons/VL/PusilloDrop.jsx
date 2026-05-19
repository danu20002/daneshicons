import React from 'react';

export const iconData = {
  "id": "PusilloDrop",
  "name": "PusilloDrop",
  "category": "VL",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.94 12.00 L 17.06 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.94 12.00 L 11.33 9.37"
      }
    ],
    [
      "path",
      {
        "d": "M 6.94 12.00 L 11.33 14.63"
      }
    ]
  ]
};

export const PusilloDrop = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.94 12.00 L 17.06 12.00" />
      <path d="M 6.94 12.00 L 11.33 9.37" />
      <path d="M 6.94 12.00 L 11.33 14.63" />
      {children}
    </svg>
  );
});

export default PusilloDrop;
