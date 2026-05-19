import React from 'react';

export const iconData = {
  "id": "SalinoSheep",
  "name": "SalinoSheep",
  "category": "VP",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.98 6.11 L 20.02 6.11 L 20.02 17.89 L 3.98 17.89 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.98 6.11 L 7.76 2.33 L 23.80 2.33 L 20.02 6.11"
      }
    ],
    [
      "path",
      {
        "d": "M 20.02 6.11 L 23.80 2.33 L 23.80 14.10 L 20.02 17.89"
      }
    ]
  ]
};

export const SalinoSheep = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.98 6.11 L 20.02 6.11 L 20.02 17.89 L 3.98 17.89 Z" />
      <path d="M 3.98 6.11 L 7.76 2.33 L 23.80 2.33 L 20.02 6.11" />
      <path d="M 20.02 6.11 L 23.80 2.33 L 23.80 14.10 L 20.02 17.89" />
      {children}
    </svg>
  );
});

export default SalinoSheep;
