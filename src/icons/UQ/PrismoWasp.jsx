import React from 'react';

export const iconData = {
  "id": "PrismoWasp",
  "name": "PrismoWasp",
  "category": "UQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.22 10.38 L 14.22 10.38"
      }
    ],
    [
      "path",
      {
        "d": "M 14.29 11.27 L 12.29 14.73"
      }
    ],
    [
      "path",
      {
        "d": "M 11.49 14.35 L 9.49 10.89"
      }
    ]
  ]
};

export const PrismoWasp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.22 10.38 L 14.22 10.38" />
      <path d="M 14.29 11.27 L 12.29 14.73" />
      <path d="M 11.49 14.35 L 9.49 10.89" />
      {children}
    </svg>
  );
});

export default PrismoWasp;
