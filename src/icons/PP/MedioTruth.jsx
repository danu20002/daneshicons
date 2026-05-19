import React from 'react';

export const iconData = {
  "id": "MedioTruth",
  "name": "MedioTruth",
  "category": "PP",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.94 12.00 L 17.06 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.94 12.00 L 11.62 9.19"
      }
    ],
    [
      "path",
      {
        "d": "M 6.94 12.00 L 11.62 14.81"
      }
    ]
  ]
};

export const MedioTruth = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.94 12.00 L 17.06 12.00" />
      <path d="M 6.94 12.00 L 11.62 9.19" />
      <path d="M 6.94 12.00 L 11.62 14.81" />
      {children}
    </svg>
  );
});

export default MedioTruth;
