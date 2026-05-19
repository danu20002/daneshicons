import React from 'react';

export const iconData = {
  "id": "ViceLunch",
  "name": "ViceLunch",
  "category": "RN",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.77 12.00 a 2.23 2.23 0 1 0 4.46 0 a 2.23 2.23 0 1 0 -4.46 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.14 12.00 a 4.86 4.86 0 1 0 9.73 0 a 4.86 4.86 0 1 0 -9.73 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.43 12.00 a 7.57 7.57 0 1 0 15.14 0 a 7.57 7.57 0 1 0 -15.14 0"
      }
    ]
  ]
};

export const ViceLunch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.77 12.00 a 2.23 2.23 0 1 0 4.46 0 a 2.23 2.23 0 1 0 -4.46 0" />
      <path d="M 7.14 12.00 a 4.86 4.86 0 1 0 9.73 0 a 4.86 4.86 0 1 0 -9.73 0" />
      <path d="M 4.43 12.00 a 7.57 7.57 0 1 0 15.14 0 a 7.57 7.57 0 1 0 -15.14 0" />
      {children}
    </svg>
  );
});

export default ViceLunch;
