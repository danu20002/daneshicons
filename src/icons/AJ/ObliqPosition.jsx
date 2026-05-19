import React from 'react';

export const iconData = {
  "id": "ObliqPosition",
  "name": "ObliqPosition",
  "category": "AJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.66 12.00 a 8.34 8.34 0 1 0 16.68 0 a 8.34 8.34 0 1 0 -16.68 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.14 9.22 a 7.86 2.3592643096556962 0 1 0 15.73 0 a 7.86 2.3592643096556962 0 1 0 -15.73 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.14 14.78 a 7.86 2.3592643096556962 0 1 0 15.73 0 a 7.86 2.3592643096556962 0 1 0 -15.73 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.66 A 2 2 0 0 0 12.00 20.34"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.66 A 2 2 0 0 1 12.00 20.34"
      }
    ]
  ]
};

export const ObliqPosition = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.66 12.00 a 8.34 8.34 0 1 0 16.68 0 a 8.34 8.34 0 1 0 -16.68 0" />
      <path d="M 4.14 9.22 a 7.86 2.3592643096556962 0 1 0 15.73 0 a 7.86 2.3592643096556962 0 1 0 -15.73 0" />
      <path d="M 4.14 14.78 a 7.86 2.3592643096556962 0 1 0 15.73 0 a 7.86 2.3592643096556962 0 1 0 -15.73 0" />
      <path d="M 12.00 3.66 A 2 2 0 0 0 12.00 20.34" />
      <path d="M 12.00 3.66 A 2 2 0 0 1 12.00 20.34" />
      {children}
    </svg>
  );
});

export default ObliqPosition;
