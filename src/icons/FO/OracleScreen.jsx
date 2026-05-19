import React from 'react';

export const iconData = {
  "id": "OracleScreen",
  "name": "OracleScreen",
  "category": "FO",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.77 12.00 a 7.23 7.23 0 1 0 14.47 0 a 7.23 7.23 0 1 0 -14.47 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.46 12.00 a 4.54 4.54 0 1 1 9.08 0 a 4.54 4.54 0 1 1 -9.08 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.73 12.00 L 20.73 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.16 16.33 L 18.69 17.61"
      }
    ],
    [
      "path",
      {
        "d": "M 13.17 18.63 L 13.52 20.60"
      }
    ],
    [
      "path",
      {
        "d": "M 8.63 17.83 L 7.63 19.56"
      }
    ],
    [
      "path",
      {
        "d": "M 5.67 14.30 L 3.79 14.99"
      }
    ],
    [
      "path",
      {
        "d": "M 5.67 9.70 L 3.79 9.01"
      }
    ],
    [
      "path",
      {
        "d": "M 8.63 6.17 L 7.63 4.44"
      }
    ],
    [
      "path",
      {
        "d": "M 13.17 5.37 L 13.52 3.40"
      }
    ],
    [
      "path",
      {
        "d": "M 17.16 7.67 L 18.69 6.39"
      }
    ]
  ]
};

export const OracleScreen = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.77 12.00 a 7.23 7.23 0 1 0 14.47 0 a 7.23 7.23 0 1 0 -14.47 0" />
      <path d="M 7.46 12.00 a 4.54 4.54 0 1 1 9.08 0 a 4.54 4.54 0 1 1 -9.08 0" />
      <path d="M 18.73 12.00 L 20.73 12.00" />
      <path d="M 17.16 16.33 L 18.69 17.61" />
      <path d="M 13.17 18.63 L 13.52 20.60" />
      <path d="M 8.63 17.83 L 7.63 19.56" />
      <path d="M 5.67 14.30 L 3.79 14.99" />
      <path d="M 5.67 9.70 L 3.79 9.01" />
      <path d="M 8.63 6.17 L 7.63 4.44" />
      <path d="M 13.17 5.37 L 13.52 3.40" />
      <path d="M 17.16 7.67 L 18.69 6.39" />
      {children}
    </svg>
  );
});

export default OracleScreen;
