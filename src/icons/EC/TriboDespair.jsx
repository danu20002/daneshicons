import React from 'react';

export const iconData = {
  "id": "TriboDespair",
  "name": "TriboDespair",
  "category": "EC",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.29 12.00 a 7.71 7.71 0 1 0 15.42 0 a 7.71 7.71 0 1 0 -15.42 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.45 12.00 a 5.55 5.55 0 1 1 11.09 0 a 5.55 5.55 0 1 1 -11.09 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.21 12.00 L 21.21 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.61 18.24 L 16.61 19.98"
      }
    ],
    [
      "path",
      {
        "d": "M 8.39 18.24 L 7.39 19.98"
      }
    ],
    [
      "path",
      {
        "d": "M 4.79 12.00 L 2.79 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.39 5.76 L 7.39 4.02"
      }
    ],
    [
      "path",
      {
        "d": "M 15.61 5.76 L 16.61 4.02"
      }
    ]
  ]
};

export const TriboDespair = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.29 12.00 a 7.71 7.71 0 1 0 15.42 0 a 7.71 7.71 0 1 0 -15.42 0" />
      <path d="M 6.45 12.00 a 5.55 5.55 0 1 1 11.09 0 a 5.55 5.55 0 1 1 -11.09 0" />
      <path d="M 19.21 12.00 L 21.21 12.00" />
      <path d="M 15.61 18.24 L 16.61 19.98" />
      <path d="M 8.39 18.24 L 7.39 19.98" />
      <path d="M 4.79 12.00 L 2.79 12.00" />
      <path d="M 8.39 5.76 L 7.39 4.02" />
      <path d="M 15.61 5.76 L 16.61 4.02" />
      {children}
    </svg>
  );
});

export default TriboDespair;
