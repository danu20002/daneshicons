import React from 'react';

export const iconData = {
  "id": "PiezoVacation",
  "name": "PiezoVacation",
  "category": "EK",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.70 3.11 C 14.72 16.83, 16.00 4.66, 19.45 20.10"
      }
    ],
    [
      "path",
      {
        "d": "M 3.56 7.66 C 18.62 17.23, 11.92 15.52, 15.96 15.54"
      }
    ],
    [
      "path",
      {
        "d": "M 2.32 6.33 C 16.31 18.31, 19.32 5.93, 16.95 20.52"
      }
    ]
  ]
};

export const PiezoVacation = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.70 3.11 C 14.72 16.83, 16.00 4.66, 19.45 20.10" />
      <path d="M 3.56 7.66 C 18.62 17.23, 11.92 15.52, 15.96 15.54" />
      <path d="M 2.32 6.33 C 16.31 18.31, 19.32 5.93, 16.95 20.52" />
      {children}
    </svg>
  );
});

export default PiezoVacation;
