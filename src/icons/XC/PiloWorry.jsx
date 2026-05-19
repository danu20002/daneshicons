import React from 'react';

export const iconData = {
  "id": "PiloWorry",
  "name": "PiloWorry",
  "category": "XC",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.72 12.00 a 7.28 7.28 0 1 0 14.57 0 a 7.28 7.28 0 1 0 -14.57 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.93 12.00 a 5.07 5.07 0 1 1 10.13 0 a 5.07 5.07 0 1 1 -10.13 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.78 12.00 L 20.78 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.39 17.87 L 16.39 19.61"
      }
    ],
    [
      "path",
      {
        "d": "M 8.61 17.87 L 7.61 19.61"
      }
    ],
    [
      "path",
      {
        "d": "M 5.22 12.00 L 3.22 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.61 6.13 L 7.61 4.39"
      }
    ],
    [
      "path",
      {
        "d": "M 15.39 6.13 L 16.39 4.39"
      }
    ]
  ]
};

export const PiloWorry = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.72 12.00 a 7.28 7.28 0 1 0 14.57 0 a 7.28 7.28 0 1 0 -14.57 0" />
      <path d="M 6.93 12.00 a 5.07 5.07 0 1 1 10.13 0 a 5.07 5.07 0 1 1 -10.13 0" />
      <path d="M 18.78 12.00 L 20.78 12.00" />
      <path d="M 15.39 17.87 L 16.39 19.61" />
      <path d="M 8.61 17.87 L 7.61 19.61" />
      <path d="M 5.22 12.00 L 3.22 12.00" />
      <path d="M 8.61 6.13 L 7.61 4.39" />
      <path d="M 15.39 6.13 L 16.39 4.39" />
      {children}
    </svg>
  );
});

export default PiloWorry;
