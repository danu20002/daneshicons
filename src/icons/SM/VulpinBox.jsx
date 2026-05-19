import React from 'react';

export const iconData = {
  "id": "VulpinBox",
  "name": "VulpinBox",
  "category": "SM",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.06 5.46 A 2.81 3.87 98 0 1 12.66 9.26"
      }
    ],
    [
      "path",
      {
        "d": "M 5.27 12.22 A 5.33 5.47 80 0 1 20.48 17.73"
      }
    ]
  ]
};

export const VulpinBox = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.06 5.46 A 2.81 3.87 98 0 1 12.66 9.26" />
      <path d="M 5.27 12.22 A 5.33 5.47 80 0 1 20.48 17.73" />
      {children}
    </svg>
  );
});

export default VulpinBox;
