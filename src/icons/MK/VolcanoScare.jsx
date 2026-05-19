import React from 'react';

export const iconData = {
  "id": "VolcanoScare",
  "name": "VolcanoScare",
  "category": "MK",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.91 12.00 a 2.09 2.09 0 1 0 4.19 0 a 2.09 2.09 0 1 0 -4.19 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.16 12.00 a 4.84 4.84 0 1 0 9.68 0 a 4.84 4.84 0 1 0 -9.68 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.24 12.00 a 7.76 7.76 0 1 0 15.51 0 a 7.76 7.76 0 1 0 -15.51 0"
      }
    ]
  ]
};

export const VolcanoScare = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.91 12.00 a 2.09 2.09 0 1 0 4.19 0 a 2.09 2.09 0 1 0 -4.19 0" />
      <path d="M 7.16 12.00 a 4.84 4.84 0 1 0 9.68 0 a 4.84 4.84 0 1 0 -9.68 0" />
      <path d="M 4.24 12.00 a 7.76 7.76 0 1 0 15.51 0 a 7.76 7.76 0 1 0 -15.51 0" />
      {children}
    </svg>
  );
});

export default VolcanoScare;
