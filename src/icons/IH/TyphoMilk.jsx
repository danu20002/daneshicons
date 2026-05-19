import React from 'react';

export const iconData = {
  "id": "TyphoMilk",
  "name": "TyphoMilk",
  "category": "IH",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.76 12.00 L 16.24 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.24 12.00 L 12.11 9.52"
      }
    ],
    [
      "path",
      {
        "d": "M 16.24 12.00 L 12.11 14.48"
      }
    ]
  ]
};

export const TyphoMilk = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.76 12.00 L 16.24 12.00" />
      <path d="M 16.24 12.00 L 12.11 9.52" />
      <path d="M 16.24 12.00 L 12.11 14.48" />
      {children}
    </svg>
  );
});

export default TyphoMilk;
