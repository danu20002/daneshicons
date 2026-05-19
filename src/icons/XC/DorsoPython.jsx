import React from 'react';

export const iconData = {
  "id": "DorsoPython",
  "name": "DorsoPython",
  "category": "XC",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.59 12.00 a 8.41 8.41 0 1 0 16.83 0 a 8.41 8.41 0 1 0 -16.83 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.52 12.00 a 5.48 5.48 0 1 1 10.96 0 a 5.48 5.48 0 1 1 -10.96 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.91 12.00 L 21.91 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.06 17.09 L 19.59 18.37"
      }
    ],
    [
      "path",
      {
        "d": "M 13.37 19.79 L 13.72 21.76"
      }
    ],
    [
      "path",
      {
        "d": "M 8.04 18.85 L 7.04 20.58"
      }
    ],
    [
      "path",
      {
        "d": "M 4.56 14.71 L 2.69 15.39"
      }
    ],
    [
      "path",
      {
        "d": "M 4.56 9.29 L 2.69 8.61"
      }
    ],
    [
      "path",
      {
        "d": "M 8.04 5.15 L 7.04 3.42"
      }
    ],
    [
      "path",
      {
        "d": "M 13.37 4.21 L 13.72 2.24"
      }
    ],
    [
      "path",
      {
        "d": "M 18.06 6.91 L 19.59 5.63"
      }
    ]
  ]
};

export const DorsoPython = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.59 12.00 a 8.41 8.41 0 1 0 16.83 0 a 8.41 8.41 0 1 0 -16.83 0" />
      <path d="M 6.52 12.00 a 5.48 5.48 0 1 1 10.96 0 a 5.48 5.48 0 1 1 -10.96 0" />
      <path d="M 19.91 12.00 L 21.91 12.00" />
      <path d="M 18.06 17.09 L 19.59 18.37" />
      <path d="M 13.37 19.79 L 13.72 21.76" />
      <path d="M 8.04 18.85 L 7.04 20.58" />
      <path d="M 4.56 14.71 L 2.69 15.39" />
      <path d="M 4.56 9.29 L 2.69 8.61" />
      <path d="M 8.04 5.15 L 7.04 3.42" />
      <path d="M 13.37 4.21 L 13.72 2.24" />
      <path d="M 18.06 6.91 L 19.59 5.63" />
      {children}
    </svg>
  );
});

export default DorsoPython;
