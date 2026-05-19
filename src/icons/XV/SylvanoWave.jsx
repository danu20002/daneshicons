import React from 'react';

export const iconData = {
  "id": "SylvanoWave",
  "name": "SylvanoWave",
  "category": "XV",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.83 12.00 a 8.17 8.17 0 1 0 16.34 0 a 8.17 8.17 0 1 0 -16.34 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.11 12.00 a 5.89 5.89 0 1 1 11.77 0 a 5.89 5.89 0 1 1 -11.77 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.67 12.00 L 21.67 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.83 18.64 L 16.83 20.37"
      }
    ],
    [
      "path",
      {
        "d": "M 8.17 18.64 L 7.17 20.37"
      }
    ],
    [
      "path",
      {
        "d": "M 4.33 12.00 L 2.33 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.17 5.36 L 7.17 3.63"
      }
    ],
    [
      "path",
      {
        "d": "M 15.83 5.36 L 16.83 3.63"
      }
    ]
  ]
};

export const SylvanoWave = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.83 12.00 a 8.17 8.17 0 1 0 16.34 0 a 8.17 8.17 0 1 0 -16.34 0" />
      <path d="M 6.11 12.00 a 5.89 5.89 0 1 1 11.77 0 a 5.89 5.89 0 1 1 -11.77 0" />
      <path d="M 19.67 12.00 L 21.67 12.00" />
      <path d="M 15.83 18.64 L 16.83 20.37" />
      <path d="M 8.17 18.64 L 7.17 20.37" />
      <path d="M 4.33 12.00 L 2.33 12.00" />
      <path d="M 8.17 5.36 L 7.17 3.63" />
      <path d="M 15.83 5.36 L 16.83 3.63" />
      {children}
    </svg>
  );
});

export default SylvanoWave;
