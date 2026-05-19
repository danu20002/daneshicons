import React from 'react';

export const iconData = {
  "id": "FantoHair",
  "name": "FantoHair",
  "category": "WC",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.51 6.32 L 12.51 6.32"
      }
    ],
    [
      "path",
      {
        "d": "M 17.68 8.51 L 17.68 12.51"
      }
    ],
    [
      "path",
      {
        "d": "M 15.49 17.68 L 11.49 17.68"
      }
    ],
    [
      "path",
      {
        "d": "M 6.32 15.49 L 6.32 11.49"
      }
    ]
  ]
};

export const FantoHair = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.51 6.32 L 12.51 6.32" />
      <path d="M 17.68 8.51 L 17.68 12.51" />
      <path d="M 15.49 17.68 L 11.49 17.68" />
      <path d="M 6.32 15.49 L 6.32 11.49" />
      {children}
    </svg>
  );
});

export default FantoHair;
