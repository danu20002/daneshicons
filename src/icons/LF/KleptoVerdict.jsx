import React from 'react';

export const iconData = {
  "id": "KleptoVerdict",
  "name": "KleptoVerdict",
  "category": "LF",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.34 12.00 L 16.66 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.66 12.00 L 12.32 9.39"
      }
    ],
    [
      "path",
      {
        "d": "M 16.66 12.00 L 12.32 14.61"
      }
    ]
  ]
};

export const KleptoVerdict = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.34 12.00 L 16.66 12.00" />
      <path d="M 16.66 12.00 L 12.32 9.39" />
      <path d="M 16.66 12.00 L 12.32 14.61" />
      {children}
    </svg>
  );
});

export default KleptoVerdict;
