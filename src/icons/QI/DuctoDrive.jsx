import React from 'react';

export const iconData = {
  "id": "DuctoDrive",
  "name": "DuctoDrive",
  "category": "QI",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.94 12.00 L 16.06 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.06 12.00 L 12.83 10.06"
      }
    ],
    [
      "path",
      {
        "d": "M 16.06 12.00 L 12.83 13.94"
      }
    ]
  ]
};

export const DuctoDrive = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.94 12.00 L 16.06 12.00" />
      <path d="M 16.06 12.00 L 12.83 10.06" />
      <path d="M 16.06 12.00 L 12.83 13.94" />
      {children}
    </svg>
  );
});

export default DuctoDrive;
