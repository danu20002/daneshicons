import React from 'react';

export const iconData = {
  "id": "VillicoVacant",
  "name": "VillicoVacant",
  "category": "FI",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.03 15.59 L 20.65 6.00 L 18.09 11.01 L 8.39 18.12 L 12.82 7.30"
      }
    ],
    [
      "path",
      {
        "d": "M 5.14 2.68 L 17.23 11.96"
      }
    ],
    [
      "path",
      {
        "d": "M 10.28 15.74 Q 11.57 2.94 15.89 20.71"
      }
    ]
  ]
};

export const VillicoVacant = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.03 15.59 L 20.65 6.00 L 18.09 11.01 L 8.39 18.12 L 12.82 7.30" />
      <path d="M 5.14 2.68 L 17.23 11.96" />
      <path d="M 10.28 15.74 Q 11.57 2.94 15.89 20.71" />
      {children}
    </svg>
  );
});

export default VillicoVacant;
