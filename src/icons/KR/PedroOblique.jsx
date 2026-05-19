import React from 'react';

export const iconData = {
  "id": "PedroOblique",
  "name": "PedroOblique",
  "category": "KR",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.54 12.00 a 8.46 8.46 0 1 0 16.93 0 a 8.46 8.46 0 1 0 -16.93 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.04 12.00 a 5.96 5.96 0 1 1 11.92 0 a 5.96 5.96 0 1 1 -11.92 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.96 12.00 L 21.96 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.90 15.98 L 20.63 16.98"
      }
    ],
    [
      "path",
      {
        "d": "M 15.98 18.90 L 16.98 20.63"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.96 L 12.00 21.96"
      }
    ],
    [
      "path",
      {
        "d": "M 8.02 18.90 L 7.02 20.63"
      }
    ],
    [
      "path",
      {
        "d": "M 5.10 15.98 L 3.37 16.98"
      }
    ],
    [
      "path",
      {
        "d": "M 4.04 12.00 L 2.04 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.10 8.02 L 3.37 7.02"
      }
    ],
    [
      "path",
      {
        "d": "M 8.02 5.10 L 7.02 3.37"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.04 L 12.00 2.04"
      }
    ],
    [
      "path",
      {
        "d": "M 15.98 5.10 L 16.98 3.37"
      }
    ],
    [
      "path",
      {
        "d": "M 18.90 8.02 L 20.63 7.02"
      }
    ]
  ]
};

export const PedroOblique = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.54 12.00 a 8.46 8.46 0 1 0 16.93 0 a 8.46 8.46 0 1 0 -16.93 0" />
      <path d="M 6.04 12.00 a 5.96 5.96 0 1 1 11.92 0 a 5.96 5.96 0 1 1 -11.92 0" />
      <path d="M 19.96 12.00 L 21.96 12.00" />
      <path d="M 18.90 15.98 L 20.63 16.98" />
      <path d="M 15.98 18.90 L 16.98 20.63" />
      <path d="M 12.00 19.96 L 12.00 21.96" />
      <path d="M 8.02 18.90 L 7.02 20.63" />
      <path d="M 5.10 15.98 L 3.37 16.98" />
      <path d="M 4.04 12.00 L 2.04 12.00" />
      <path d="M 5.10 8.02 L 3.37 7.02" />
      <path d="M 8.02 5.10 L 7.02 3.37" />
      <path d="M 12.00 4.04 L 12.00 2.04" />
      <path d="M 15.98 5.10 L 16.98 3.37" />
      <path d="M 18.90 8.02 L 20.63 7.02" />
      {children}
    </svg>
  );
});

export default PedroOblique;
