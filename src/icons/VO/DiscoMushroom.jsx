import React from 'react';

export const iconData = {
  "id": "DiscoMushroom",
  "name": "DiscoMushroom",
  "category": "VO",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.17 12.00 a 8.83 8.83 0 1 0 17.66 0 a 8.83 8.83 0 1 0 -17.66 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.68 9.06 a 8.32 2.4972796488047364 0 1 0 16.65 0 a 8.32 2.4972796488047364 0 1 0 -16.65 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.68 14.94 a 8.32 2.4972796488047364 0 1 0 16.65 0 a 8.32 2.4972796488047364 0 1 0 -16.65 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.17 A 2 2 0 0 0 12.00 20.83"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.17 A 2 2 0 0 1 12.00 20.83"
      }
    ]
  ]
};

export const DiscoMushroom = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.17 12.00 a 8.83 8.83 0 1 0 17.66 0 a 8.83 8.83 0 1 0 -17.66 0" />
      <path d="M 3.68 9.06 a 8.32 2.4972796488047364 0 1 0 16.65 0 a 8.32 2.4972796488047364 0 1 0 -16.65 0" />
      <path d="M 3.68 14.94 a 8.32 2.4972796488047364 0 1 0 16.65 0 a 8.32 2.4972796488047364 0 1 0 -16.65 0" />
      <path d="M 12.00 3.17 A 2 2 0 0 0 12.00 20.83" />
      <path d="M 12.00 3.17 A 2 2 0 0 1 12.00 20.83" />
      {children}
    </svg>
  );
});

export default DiscoMushroom;
