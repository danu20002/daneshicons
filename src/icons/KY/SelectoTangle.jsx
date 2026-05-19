import React from 'react';

export const iconData = {
  "id": "SelectoTangle",
  "name": "SelectoTangle",
  "category": "KY",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.54 12.00 a 2.46 2.46 0 1 0 4.92 0 a 2.46 2.46 0 1 0 -4.92 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.91 12.00 a 4.09 4.09 0 1 0 8.19 0 a 4.09 4.09 0 1 0 -8.19 0",
        "stroke-dasharray": "4 2"
      }
    ],
    [
      "path",
      {
        "d": "M 6.53 12.00 a 5.47 5.47 0 1 0 10.93 0 a 5.47 5.47 0 1 0 -10.93 0",
        "stroke-dasharray": "5 1"
      }
    ],
    [
      "path",
      {
        "d": "M 5.07 12.00 a 6.93 6.93 0 1 0 13.85 0 a 6.93 6.93 0 1 0 -13.85 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.33 12.00 a 8.67 8.67 0 1 0 17.33 0 a 8.67 8.67 0 1 0 -17.33 0",
        "stroke-dasharray": "5 1"
      }
    ]
  ]
};

export const SelectoTangle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.54 12.00 a 2.46 2.46 0 1 0 4.92 0 a 2.46 2.46 0 1 0 -4.92 0" />
      <path d="M 7.91 12.00 a 4.09 4.09 0 1 0 8.19 0 a 4.09 4.09 0 1 0 -8.19 0" stroke-dasharray="4 2" />
      <path d="M 6.53 12.00 a 5.47 5.47 0 1 0 10.93 0 a 5.47 5.47 0 1 0 -10.93 0" stroke-dasharray="5 1" />
      <path d="M 5.07 12.00 a 6.93 6.93 0 1 0 13.85 0 a 6.93 6.93 0 1 0 -13.85 0" />
      <path d="M 3.33 12.00 a 8.67 8.67 0 1 0 17.33 0 a 8.67 8.67 0 1 0 -17.33 0" stroke-dasharray="5 1" />
      {children}
    </svg>
  );
});

export default SelectoTangle;
