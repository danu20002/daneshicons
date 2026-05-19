import React from 'react';

export const iconData = {
  "id": "OzoPuzzle",
  "name": "OzoPuzzle",
  "category": "L",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.20 12.00 Q 14.39 12.78 19.44 17.41"
      }
    ],
    [
      "path",
      {
        "d": "M 19.44 17.41 Q 13.47 14.03 14.84 20.75"
      }
    ],
    [
      "path",
      {
        "d": "M 14.84 20.75 Q 12.00 14.51 9.16 20.75"
      }
    ],
    [
      "path",
      {
        "d": "M 9.16 20.75 Q 10.53 14.03 4.56 17.41"
      }
    ],
    [
      "path",
      {
        "d": "M 4.56 17.41 Q 9.61 12.78 2.80 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.80 12.00 Q 9.61 11.22 4.56 6.59"
      }
    ],
    [
      "path",
      {
        "d": "M 4.56 6.59 Q 10.53 9.97 9.16 3.25"
      }
    ],
    [
      "path",
      {
        "d": "M 9.16 3.25 Q 12.00 9.49 14.84 3.25"
      }
    ],
    [
      "path",
      {
        "d": "M 14.84 3.25 Q 13.47 9.97 19.44 6.59"
      }
    ],
    [
      "path",
      {
        "d": "M 19.44 6.59 Q 14.39 11.22 21.20 12.00"
      }
    ]
  ]
};

export const OzoPuzzle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.20 12.00 Q 14.39 12.78 19.44 17.41" />
      <path d="M 19.44 17.41 Q 13.47 14.03 14.84 20.75" />
      <path d="M 14.84 20.75 Q 12.00 14.51 9.16 20.75" />
      <path d="M 9.16 20.75 Q 10.53 14.03 4.56 17.41" />
      <path d="M 4.56 17.41 Q 9.61 12.78 2.80 12.00" />
      <path d="M 2.80 12.00 Q 9.61 11.22 4.56 6.59" />
      <path d="M 4.56 6.59 Q 10.53 9.97 9.16 3.25" />
      <path d="M 9.16 3.25 Q 12.00 9.49 14.84 3.25" />
      <path d="M 14.84 3.25 Q 13.47 9.97 19.44 6.59" />
      <path d="M 19.44 6.59 Q 14.39 11.22 21.20 12.00" />
      {children}
    </svg>
  );
});

export default OzoPuzzle;
