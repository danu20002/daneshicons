import React from 'react';

export const iconData = {
  "id": "MicroUtility",
  "name": "MicroUtility",
  "category": "RG",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.43 12.00 a 7.57 7.57 0 1 0 15.13 0 a 7.57 7.57 0 1 0 -15.13 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.27 12.00 a 4.73 4.73 0 1 1 9.45 0 a 4.73 4.73 0 1 1 -9.45 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.07 12.00 L 21.07 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.41 17.52 L 17.65 19.09"
      }
    ],
    [
      "path",
      {
        "d": "M 10.43 18.89 L 9.98 20.84"
      }
    ],
    [
      "path",
      {
        "d": "M 5.63 15.07 L 3.83 15.93"
      }
    ],
    [
      "path",
      {
        "d": "M 5.63 8.93 L 3.83 8.07"
      }
    ],
    [
      "path",
      {
        "d": "M 10.43 5.11 L 9.98 3.16"
      }
    ],
    [
      "path",
      {
        "d": "M 16.41 6.48 L 17.65 4.91"
      }
    ]
  ]
};

export const MicroUtility = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.43 12.00 a 7.57 7.57 0 1 0 15.13 0 a 7.57 7.57 0 1 0 -15.13 0" />
      <path d="M 7.27 12.00 a 4.73 4.73 0 1 1 9.45 0 a 4.73 4.73 0 1 1 -9.45 0" />
      <path d="M 19.07 12.00 L 21.07 12.00" />
      <path d="M 16.41 17.52 L 17.65 19.09" />
      <path d="M 10.43 18.89 L 9.98 20.84" />
      <path d="M 5.63 15.07 L 3.83 15.93" />
      <path d="M 5.63 8.93 L 3.83 8.07" />
      <path d="M 10.43 5.11 L 9.98 3.16" />
      <path d="M 16.41 6.48 L 17.65 4.91" />
      {children}
    </svg>
  );
});

export default MicroUtility;
