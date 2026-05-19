import React from 'react';

export const iconData = {
  "id": "VerniceTherapy",
  "name": "VerniceTherapy",
  "category": "MR",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.74 12.00 L 17.26 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.26 12.00 L 12.74 9.29"
      }
    ],
    [
      "path",
      {
        "d": "M 17.26 12.00 L 12.74 14.71"
      }
    ]
  ]
};

export const VerniceTherapy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.74 12.00 L 17.26 12.00" />
      <path d="M 17.26 12.00 L 12.74 9.29" />
      <path d="M 17.26 12.00 L 12.74 14.71" />
      {children}
    </svg>
  );
});

export default VerniceTherapy;
