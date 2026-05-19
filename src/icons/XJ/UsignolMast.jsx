import React from 'react';

export const iconData = {
  "id": "UsignolMast",
  "name": "UsignolMast",
  "category": "XJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.67 12.00 a 2.33 2.33 0 1 0 4.66 0 a 2.33 2.33 0 1 0 -4.66 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.17 12.00 a 3.83 3.83 0 1 0 7.67 0 a 3.83 3.83 0 1 0 -7.67 0",
        "stroke-dasharray": "4 2"
      }
    ],
    [
      "path",
      {
        "d": "M 6.50 12.00 a 5.50 5.50 0 1 0 11.00 0 a 5.50 5.50 0 1 0 -11.00 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.85 12.00 a 7.15 7.15 0 1 0 14.29 0 a 7.15 7.15 0 1 0 -14.29 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.54 12.00 a 8.46 8.46 0 1 0 16.91 0 a 8.46 8.46 0 1 0 -16.91 0"
      }
    ]
  ]
};

export const UsignolMast = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.67 12.00 a 2.33 2.33 0 1 0 4.66 0 a 2.33 2.33 0 1 0 -4.66 0" />
      <path d="M 8.17 12.00 a 3.83 3.83 0 1 0 7.67 0 a 3.83 3.83 0 1 0 -7.67 0" stroke-dasharray="4 2" />
      <path d="M 6.50 12.00 a 5.50 5.50 0 1 0 11.00 0 a 5.50 5.50 0 1 0 -11.00 0" />
      <path d="M 4.85 12.00 a 7.15 7.15 0 1 0 14.29 0 a 7.15 7.15 0 1 0 -14.29 0" />
      <path d="M 3.54 12.00 a 8.46 8.46 0 1 0 16.91 0 a 8.46 8.46 0 1 0 -16.91 0" />
      {children}
    </svg>
  );
});

export default UsignolMast;
