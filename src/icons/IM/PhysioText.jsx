import React from 'react';

export const iconData = {
  "id": "PhysioText",
  "name": "PhysioText",
  "category": "IM",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.63 12.00 a 7.37 7.37 0 1 0 14.73 0 a 7.37 7.37 0 1 0 -14.73 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.28 12.00 a 4.72 4.72 0 1 1 9.44 0 a 4.72 4.72 0 1 1 -9.44 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.87 12.00 L 20.87 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.86 16.86 L 18.27 18.27"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 18.87 L 12.00 20.87"
      }
    ],
    [
      "path",
      {
        "d": "M 7.14 16.86 L 5.73 18.27"
      }
    ],
    [
      "path",
      {
        "d": "M 5.13 12.00 L 3.13 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 7.14 7.14 L 5.73 5.73"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.13 L 12.00 3.13"
      }
    ],
    [
      "path",
      {
        "d": "M 16.86 7.14 L 18.27 5.73"
      }
    ]
  ]
};

export const PhysioText = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.63 12.00 a 7.37 7.37 0 1 0 14.73 0 a 7.37 7.37 0 1 0 -14.73 0" />
      <path d="M 7.28 12.00 a 4.72 4.72 0 1 1 9.44 0 a 4.72 4.72 0 1 1 -9.44 0" />
      <path d="M 18.87 12.00 L 20.87 12.00" />
      <path d="M 16.86 16.86 L 18.27 18.27" />
      <path d="M 12.00 18.87 L 12.00 20.87" />
      <path d="M 7.14 16.86 L 5.73 18.27" />
      <path d="M 5.13 12.00 L 3.13 12.00" />
      <path d="M 7.14 7.14 L 5.73 5.73" />
      <path d="M 12.00 5.13 L 12.00 3.13" />
      <path d="M 16.86 7.14 L 18.27 5.73" />
      {children}
    </svg>
  );
});

export default PhysioText;
