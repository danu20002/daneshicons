import React from 'react';

export const iconData = {
  "id": "SpanoSacred",
  "name": "SpanoSacred",
  "category": "VQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.83 12.00 a 7.17 7.17 0 1 0 14.34 0 a 7.17 7.17 0 1 0 -14.34 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.19 12.00 a 4.81 4.81 0 1 1 9.62 0 a 4.81 4.81 0 1 1 -9.62 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.67 12.00 L 20.67 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.33 17.78 L 16.33 19.51"
      }
    ],
    [
      "path",
      {
        "d": "M 8.67 17.78 L 7.67 19.51"
      }
    ],
    [
      "path",
      {
        "d": "M 5.33 12.00 L 3.33 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.67 6.22 L 7.67 4.49"
      }
    ],
    [
      "path",
      {
        "d": "M 15.33 6.22 L 16.33 4.49"
      }
    ]
  ]
};

export const SpanoSacred = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.83 12.00 a 7.17 7.17 0 1 0 14.34 0 a 7.17 7.17 0 1 0 -14.34 0" />
      <path d="M 7.19 12.00 a 4.81 4.81 0 1 1 9.62 0 a 4.81 4.81 0 1 1 -9.62 0" />
      <path d="M 18.67 12.00 L 20.67 12.00" />
      <path d="M 15.33 17.78 L 16.33 19.51" />
      <path d="M 8.67 17.78 L 7.67 19.51" />
      <path d="M 5.33 12.00 L 3.33 12.00" />
      <path d="M 8.67 6.22 L 7.67 4.49" />
      <path d="M 15.33 6.22 L 16.33 4.49" />
      {children}
    </svg>
  );
});

export default SpanoSacred;
