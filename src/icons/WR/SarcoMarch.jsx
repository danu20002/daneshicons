import React from 'react';

export const iconData = {
  "id": "SarcoMarch",
  "name": "SarcoMarch",
  "category": "WR",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.12 7.78 C 19.15 12.42, 14.27 6.58, 14.87 19.63"
      }
    ],
    [
      "path",
      {
        "d": "M 8.44 6.71 C 16.98 12.82, 8.93 18.24, 19.23 15.90"
      }
    ],
    [
      "path",
      {
        "d": "M 6.44 8.29 C 7.52 6.55, 14.33 5.16, 14.99 16.67"
      }
    ]
  ]
};

export const SarcoMarch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.12 7.78 C 19.15 12.42, 14.27 6.58, 14.87 19.63" />
      <path d="M 8.44 6.71 C 16.98 12.82, 8.93 18.24, 19.23 15.90" />
      <path d="M 6.44 8.29 C 7.52 6.55, 14.33 5.16, 14.99 16.67" />
      {children}
    </svg>
  );
});

export default SarcoMarch;
