import React from 'react';

export const iconData = {
  "id": "VirgultoThrust",
  "name": "VirgultoThrust",
  "category": "OB",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.01 7.00 L 12.01 7.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.33 11.05 L 16.33 14.51"
      }
    ],
    [
      "path",
      {
        "d": "M 9.66 17.96 L 7.66 14.49"
      }
    ]
  ]
};

export const VirgultoThrust = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.01 7.00 L 12.01 7.00" />
      <path d="M 18.33 11.05 L 16.33 14.51" />
      <path d="M 9.66 17.96 L 7.66 14.49" />
      {children}
    </svg>
  );
});

export default VirgultoThrust;
