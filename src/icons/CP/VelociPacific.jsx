import React from 'react';

export const iconData = {
  "id": "VelociPacific",
  "name": "VelociPacific",
  "category": "CP",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.48 5.78 L 19.52 5.78 L 19.52 18.22 L 4.48 18.22 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.48 5.78 L 9.30 0.96 L 24.34 0.96 L 19.52 5.78"
      }
    ],
    [
      "path",
      {
        "d": "M 19.52 5.78 L 24.34 0.96 L 24.34 13.40 L 19.52 18.22"
      }
    ]
  ]
};

export const VelociPacific = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.48 5.78 L 19.52 5.78 L 19.52 18.22 L 4.48 18.22 Z" />
      <path d="M 4.48 5.78 L 9.30 0.96 L 24.34 0.96 L 19.52 5.78" />
      <path d="M 19.52 5.78 L 24.34 0.96 L 24.34 13.40 L 19.52 18.22" />
      {children}
    </svg>
  );
});

export default VelociPacific;
