import React from 'react';

export const iconData = {
  "id": "TropicoVagabond",
  "name": "TropicoVagabond",
  "category": "DH",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.25 12.00 a 8.75 8.75 0 1 0 17.50 0 a 8.75 8.75 0 1 0 -17.50 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.42 7.63 a 7.58 2.2729406250870916 0 1 0 15.15 0 a 7.58 2.2729406250870916 0 1 0 -15.15 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.25 12.00 a 8.75 2.624565763492137 0 1 0 17.50 0 a 8.75 2.624565763492137 0 1 0 -17.50 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.42 16.37 a 7.58 2.2729406250870916 0 1 0 15.15 0 a 7.58 2.2729406250870916 0 1 0 -15.15 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.25 A 2 2 0 0 0 12.00 20.75"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.25 A 2 2 0 0 1 12.00 20.75"
      }
    ]
  ]
};

export const TropicoVagabond = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.25 12.00 a 8.75 8.75 0 1 0 17.50 0 a 8.75 8.75 0 1 0 -17.50 0" />
      <path d="M 4.42 7.63 a 7.58 2.2729406250870916 0 1 0 15.15 0 a 7.58 2.2729406250870916 0 1 0 -15.15 0" />
      <path d="M 3.25 12.00 a 8.75 2.624565763492137 0 1 0 17.50 0 a 8.75 2.624565763492137 0 1 0 -17.50 0" />
      <path d="M 4.42 16.37 a 7.58 2.2729406250870916 0 1 0 15.15 0 a 7.58 2.2729406250870916 0 1 0 -15.15 0" />
      <path d="M 12.00 3.25 A 2 2 0 0 0 12.00 20.75" />
      <path d="M 12.00 3.25 A 2 2 0 0 1 12.00 20.75" />
      {children}
    </svg>
  );
});

export default TropicoVagabond;
