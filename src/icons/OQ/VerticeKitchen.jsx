import React from 'react';

export const iconData = {
  "id": "VerticeKitchen",
  "name": "VerticeKitchen",
  "category": "OQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.90 6.70 C 16.57 7.65, 8.89 15.81, 14.77 20.16"
      }
    ],
    [
      "path",
      {
        "d": "M 6.35 7.95 C 7.22 12.62, 14.20 7.21, 19.09 15.41"
      }
    ],
    [
      "path",
      {
        "d": "M 2.30 5.12 C 12.41 18.06, 8.93 7.36, 20.68 15.75"
      }
    ]
  ]
};

export const VerticeKitchen = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.90 6.70 C 16.57 7.65, 8.89 15.81, 14.77 20.16" />
      <path d="M 6.35 7.95 C 7.22 12.62, 14.20 7.21, 19.09 15.41" />
      <path d="M 2.30 5.12 C 12.41 18.06, 8.93 7.36, 20.68 15.75" />
      {children}
    </svg>
  );
});

export default VerticeKitchen;
