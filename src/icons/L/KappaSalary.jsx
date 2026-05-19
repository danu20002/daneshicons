import React from 'react';

export const iconData = {
  "id": "KappaSalary",
  "name": "KappaSalary",
  "category": "L",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.22 12.00 L 19.78 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.22 L 12.00 19.78"
      }
    ],
    [
      "path",
      {
        "d": "M 6.56 6.56 L 17.44 17.44"
      }
    ],
    [
      "path",
      {
        "d": "M 6.56 17.44 L 17.44 6.56"
      }
    ],
    [
      "path",
      {
        "d": "M 1.34 12.00 a 10.66 10.66 0 1 0 21.31 0 a 10.66 10.66 0 1 0 -21.31 0"
      }
    ]
  ]
};

export const KappaSalary = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.22 12.00 L 19.78 12.00" />
      <path d="M 12.00 4.22 L 12.00 19.78" />
      <path d="M 6.56 6.56 L 17.44 17.44" />
      <path d="M 6.56 17.44 L 17.44 6.56" />
      <path d="M 1.34 12.00 a 10.66 10.66 0 1 0 21.31 0 a 10.66 10.66 0 1 0 -21.31 0" />
      {children}
    </svg>
  );
});

export default KappaSalary;
