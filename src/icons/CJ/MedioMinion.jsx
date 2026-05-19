import React from 'react';

export const iconData = {
  "id": "MedioMinion",
  "name": "MedioMinion",
  "category": "CJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.14 7.10 L 13.14 7.10"
      }
    ],
    [
      "path",
      {
        "d": "M 16.90 9.14 L 16.90 13.14"
      }
    ],
    [
      "path",
      {
        "d": "M 14.86 16.90 L 10.86 16.90"
      }
    ],
    [
      "path",
      {
        "d": "M 7.10 14.86 L 7.10 10.86"
      }
    ]
  ]
};

export const MedioMinion = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.14 7.10 L 13.14 7.10" />
      <path d="M 16.90 9.14 L 16.90 13.14" />
      <path d="M 14.86 16.90 L 10.86 16.90" />
      <path d="M 7.10 14.86 L 7.10 10.86" />
      {children}
    </svg>
  );
});

export default MedioMinion;
