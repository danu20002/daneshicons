import React from 'react';

export const iconData = {
  "id": "EquiReflect",
  "name": "EquiReflect",
  "category": "ZB",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.60 21.72 L 14.97 15.36 L 18.23 8.35"
      }
    ],
    [
      "path",
      {
        "d": "M 4.94 9.30 L 2.09 6.12 L 16.50 13.04 L 4.69 17.28 L 17.37 14.51 L 11.01 8.82 L 8.50 15.61 L 13.09 21.78"
      }
    ],
    [
      "path",
      {
        "d": "M 18.37 5.14 C 4.16 18.75, 4.84 10.00, 12.65 5.27"
      }
    ]
  ]
};

export const EquiReflect = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.60 21.72 L 14.97 15.36 L 18.23 8.35" />
      <path d="M 4.94 9.30 L 2.09 6.12 L 16.50 13.04 L 4.69 17.28 L 17.37 14.51 L 11.01 8.82 L 8.50 15.61 L 13.09 21.78" />
      <path d="M 18.37 5.14 C 4.16 18.75, 4.84 10.00, 12.65 5.27" />
      {children}
    </svg>
  );
});

export default EquiReflect;
