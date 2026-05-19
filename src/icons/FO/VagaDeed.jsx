import React from 'react';

export const iconData = {
  "id": "VagaDeed",
  "name": "VagaDeed",
  "category": "FO",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.46 12.00 a 8.54 8.54 0 1 0 17.09 0 a 8.54 8.54 0 1 0 -17.09 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.06 12.00 a 6.94 6.94 0 1 1 13.87 0 a 6.94 6.94 0 1 1 -13.87 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.04 12.00 L 22.04 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.97 16.02 L 20.70 17.02"
      }
    ],
    [
      "path",
      {
        "d": "M 16.02 18.97 L 17.02 20.70"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.04 L 12.00 22.04"
      }
    ],
    [
      "path",
      {
        "d": "M 7.98 18.97 L 6.98 20.70"
      }
    ],
    [
      "path",
      {
        "d": "M 5.03 16.02 L 3.30 17.02"
      }
    ],
    [
      "path",
      {
        "d": "M 3.96 12.00 L 1.96 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.03 7.98 L 3.30 6.98"
      }
    ],
    [
      "path",
      {
        "d": "M 7.98 5.03 L 6.98 3.30"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.96 L 12.00 1.96"
      }
    ],
    [
      "path",
      {
        "d": "M 16.02 5.03 L 17.02 3.30"
      }
    ],
    [
      "path",
      {
        "d": "M 18.97 7.98 L 20.70 6.98"
      }
    ]
  ]
};

export const VagaDeed = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.46 12.00 a 8.54 8.54 0 1 0 17.09 0 a 8.54 8.54 0 1 0 -17.09 0" />
      <path d="M 5.06 12.00 a 6.94 6.94 0 1 1 13.87 0 a 6.94 6.94 0 1 1 -13.87 0" />
      <path d="M 20.04 12.00 L 22.04 12.00" />
      <path d="M 18.97 16.02 L 20.70 17.02" />
      <path d="M 16.02 18.97 L 17.02 20.70" />
      <path d="M 12.00 20.04 L 12.00 22.04" />
      <path d="M 7.98 18.97 L 6.98 20.70" />
      <path d="M 5.03 16.02 L 3.30 17.02" />
      <path d="M 3.96 12.00 L 1.96 12.00" />
      <path d="M 5.03 7.98 L 3.30 6.98" />
      <path d="M 7.98 5.03 L 6.98 3.30" />
      <path d="M 12.00 3.96 L 12.00 1.96" />
      <path d="M 16.02 5.03 L 17.02 3.30" />
      <path d="M 18.97 7.98 L 20.70 6.98" />
      {children}
    </svg>
  );
});

export default VagaDeed;
