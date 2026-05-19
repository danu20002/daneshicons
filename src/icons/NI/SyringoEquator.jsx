import React from 'react';

export const iconData = {
  "id": "SyringoEquator",
  "name": "SyringoEquator",
  "category": "NI",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.80 10.32 L 13.80 10.32"
      }
    ],
    [
      "path",
      {
        "d": "M 14.56 10.93 L 12.56 14.40"
      }
    ],
    [
      "path",
      {
        "d": "M 11.64 14.75 L 9.64 11.29"
      }
    ]
  ]
};

export const SyringoEquator = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.80 10.32 L 13.80 10.32" />
      <path d="M 14.56 10.93 L 12.56 14.40" />
      <path d="M 11.64 14.75 L 9.64 11.29" />
      {children}
    </svg>
  );
});

export default SyringoEquator;
