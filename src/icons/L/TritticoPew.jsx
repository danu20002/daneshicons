import React from 'react';

export const iconData = {
  "id": "TritticoPew",
  "name": "TritticoPew",
  "category": "L",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.00 7.39 L 14.00 7.39"
      }
    ],
    [
      "path",
      {
        "d": "M 16.61 10.00 L 16.61 14.00"
      }
    ],
    [
      "path",
      {
        "d": "M 14.00 16.61 L 10.00 16.61"
      }
    ],
    [
      "path",
      {
        "d": "M 7.39 14.00 L 7.39 10.00"
      }
    ]
  ]
};

export const TritticoPew = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.00 7.39 L 14.00 7.39" />
      <path d="M 16.61 10.00 L 16.61 14.00" />
      <path d="M 14.00 16.61 L 10.00 16.61" />
      <path d="M 7.39 14.00 L 7.39 10.00" />
      {children}
    </svg>
  );
});

export default TritticoPew;
