import React from 'react';

export const iconData = {
  "id": "StructoWart",
  "name": "StructoWart",
  "category": "BV",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.12 12.00 a 8.88 8.88 0 1 0 17.76 0 a 8.88 8.88 0 1 0 -17.76 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.12 12.00 a 8.88 2.6639668931253255 0 1 0 17.76 0 a 8.88 2.6639668931253255 0 1 0 -17.76 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.44 4.31 A 2 2 0 0 0 16.44 19.69"
      }
    ],
    [
      "path",
      {
        "d": "M 16.44 4.31 A 2 2 0 0 1 16.44 19.69"
      }
    ],
    [
      "path",
      {
        "d": "M 7.56 4.31 A 2 2 0 0 0 7.56 19.69"
      }
    ],
    [
      "path",
      {
        "d": "M 7.56 4.31 A 2 2 0 0 1 7.56 19.69"
      }
    ]
  ]
};

export const StructoWart = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.12 12.00 a 8.88 8.88 0 1 0 17.76 0 a 8.88 8.88 0 1 0 -17.76 0" />
      <path d="M 3.12 12.00 a 8.88 2.6639668931253255 0 1 0 17.76 0 a 8.88 2.6639668931253255 0 1 0 -17.76 0" />
      <path d="M 16.44 4.31 A 2 2 0 0 0 16.44 19.69" />
      <path d="M 16.44 4.31 A 2 2 0 0 1 16.44 19.69" />
      <path d="M 7.56 4.31 A 2 2 0 0 0 7.56 19.69" />
      <path d="M 7.56 4.31 A 2 2 0 0 1 7.56 19.69" />
      {children}
    </svg>
  );
});

export default StructoWart;
