import React from 'react';

export const iconData = {
  "id": "UltraTalk",
  "name": "UltraTalk",
  "category": "LY",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.10 12.00 L 16.90 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 7.10 12.00 L 11.58 9.31"
      }
    ],
    [
      "path",
      {
        "d": "M 7.10 12.00 L 11.58 14.69"
      }
    ]
  ]
};

export const UltraTalk = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.10 12.00 L 16.90 12.00" />
      <path d="M 7.10 12.00 L 11.58 9.31" />
      <path d="M 7.10 12.00 L 11.58 14.69" />
      {children}
    </svg>
  );
});

export default UltraTalk;
