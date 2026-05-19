import React from 'react';

export const iconData = {
  "id": "VindiceQuanta",
  "name": "VindiceQuanta",
  "category": "PB",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.04 12.00 a 7.96 7.96 0 1 0 15.92 0 a 7.96 7.96 0 1 0 -15.92 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.98 12.00 a 5.02 5.02 0 1 1 10.04 0 a 5.02 5.02 0 1 1 -10.04 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.46 12.00 L 21.46 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.73 18.46 L 16.73 20.19"
      }
    ],
    [
      "path",
      {
        "d": "M 8.27 18.46 L 7.27 20.19"
      }
    ],
    [
      "path",
      {
        "d": "M 4.54 12.00 L 2.54 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.27 5.54 L 7.27 3.81"
      }
    ],
    [
      "path",
      {
        "d": "M 15.73 5.54 L 16.73 3.81"
      }
    ]
  ]
};

export const VindiceQuanta = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.04 12.00 a 7.96 7.96 0 1 0 15.92 0 a 7.96 7.96 0 1 0 -15.92 0" />
      <path d="M 6.98 12.00 a 5.02 5.02 0 1 1 10.04 0 a 5.02 5.02 0 1 1 -10.04 0" />
      <path d="M 19.46 12.00 L 21.46 12.00" />
      <path d="M 15.73 18.46 L 16.73 20.19" />
      <path d="M 8.27 18.46 L 7.27 20.19" />
      <path d="M 4.54 12.00 L 2.54 12.00" />
      <path d="M 8.27 5.54 L 7.27 3.81" />
      <path d="M 15.73 5.54 L 16.73 3.81" />
      {children}
    </svg>
  );
});

export default VindiceQuanta;
