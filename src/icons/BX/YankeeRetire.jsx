import React from 'react';

export const iconData = {
  "id": "YankeeRetire",
  "name": "YankeeRetire",
  "category": "BX",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.96 12.00 a 7.04 7.04 0 1 0 14.09 0 a 7.04 7.04 0 1 0 -14.09 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.33 12.00 a 4.67 4.67 0 1 1 9.33 0 a 4.67 4.67 0 1 1 -9.33 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.54 12.00 L 20.54 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.63 16.63 L 18.04 18.04"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 18.54 L 12.00 20.54"
      }
    ],
    [
      "path",
      {
        "d": "M 7.37 16.63 L 5.96 18.04"
      }
    ],
    [
      "path",
      {
        "d": "M 5.46 12.00 L 3.46 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 7.37 7.37 L 5.96 5.96"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.46 L 12.00 3.46"
      }
    ],
    [
      "path",
      {
        "d": "M 16.63 7.37 L 18.04 5.96"
      }
    ]
  ]
};

export const YankeeRetire = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.96 12.00 a 7.04 7.04 0 1 0 14.09 0 a 7.04 7.04 0 1 0 -14.09 0" />
      <path d="M 7.33 12.00 a 4.67 4.67 0 1 1 9.33 0 a 4.67 4.67 0 1 1 -9.33 0" />
      <path d="M 18.54 12.00 L 20.54 12.00" />
      <path d="M 16.63 16.63 L 18.04 18.04" />
      <path d="M 12.00 18.54 L 12.00 20.54" />
      <path d="M 7.37 16.63 L 5.96 18.04" />
      <path d="M 5.46 12.00 L 3.46 12.00" />
      <path d="M 7.37 7.37 L 5.96 5.96" />
      <path d="M 12.00 5.46 L 12.00 3.46" />
      <path d="M 16.63 7.37 L 18.04 5.96" />
      {children}
    </svg>
  );
});

export default YankeeRetire;
