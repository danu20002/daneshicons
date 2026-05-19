import React from 'react';

export const iconData = {
  "id": "QualiRed",
  "name": "QualiRed",
  "category": "MD",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.24 12.00 a 7.76 7.76 0 1 0 15.52 0 a 7.76 7.76 0 1 0 -15.52 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.76 12.00 a 5.24 5.24 0 1 1 10.48 0 a 5.24 5.24 0 1 1 -10.48 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.26 12.00 L 21.26 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.63 18.29 L 16.63 20.02"
      }
    ],
    [
      "path",
      {
        "d": "M 8.37 18.29 L 7.37 20.02"
      }
    ],
    [
      "path",
      {
        "d": "M 4.74 12.00 L 2.74 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.37 5.71 L 7.37 3.98"
      }
    ],
    [
      "path",
      {
        "d": "M 15.63 5.71 L 16.63 3.98"
      }
    ]
  ]
};

export const QualiRed = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.24 12.00 a 7.76 7.76 0 1 0 15.52 0 a 7.76 7.76 0 1 0 -15.52 0" />
      <path d="M 6.76 12.00 a 5.24 5.24 0 1 1 10.48 0 a 5.24 5.24 0 1 1 -10.48 0" />
      <path d="M 19.26 12.00 L 21.26 12.00" />
      <path d="M 15.63 18.29 L 16.63 20.02" />
      <path d="M 8.37 18.29 L 7.37 20.02" />
      <path d="M 4.74 12.00 L 2.74 12.00" />
      <path d="M 8.37 5.71 L 7.37 3.98" />
      <path d="M 15.63 5.71 L 16.63 3.98" />
      {children}
    </svg>
  );
});

export default QualiRed;
