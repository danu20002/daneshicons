import React from 'react';

export const iconData = {
  "id": "StibioHumble",
  "name": "StibioHumble",
  "category": "DJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.77 12.00 a 8.23 8.23 0 1 0 16.46 0 a 8.23 8.23 0 1 0 -16.46 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.40 12.00 a 6.60 6.60 0 1 1 13.19 0 a 6.60 6.60 0 1 1 -13.19 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.73 12.00 L 21.73 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.69 15.86 L 20.43 16.86"
      }
    ],
    [
      "path",
      {
        "d": "M 15.86 18.69 L 16.86 20.43"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.73 L 12.00 21.73"
      }
    ],
    [
      "path",
      {
        "d": "M 8.14 18.69 L 7.14 20.43"
      }
    ],
    [
      "path",
      {
        "d": "M 5.31 15.86 L 3.57 16.86"
      }
    ],
    [
      "path",
      {
        "d": "M 4.27 12.00 L 2.27 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.31 8.14 L 3.57 7.14"
      }
    ],
    [
      "path",
      {
        "d": "M 8.14 5.31 L 7.14 3.57"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.27 L 12.00 2.27"
      }
    ],
    [
      "path",
      {
        "d": "M 15.86 5.31 L 16.86 3.57"
      }
    ],
    [
      "path",
      {
        "d": "M 18.69 8.14 L 20.43 7.14"
      }
    ]
  ]
};

export const StibioHumble = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.77 12.00 a 8.23 8.23 0 1 0 16.46 0 a 8.23 8.23 0 1 0 -16.46 0" />
      <path d="M 5.40 12.00 a 6.60 6.60 0 1 1 13.19 0 a 6.60 6.60 0 1 1 -13.19 0" />
      <path d="M 19.73 12.00 L 21.73 12.00" />
      <path d="M 18.69 15.86 L 20.43 16.86" />
      <path d="M 15.86 18.69 L 16.86 20.43" />
      <path d="M 12.00 19.73 L 12.00 21.73" />
      <path d="M 8.14 18.69 L 7.14 20.43" />
      <path d="M 5.31 15.86 L 3.57 16.86" />
      <path d="M 4.27 12.00 L 2.27 12.00" />
      <path d="M 5.31 8.14 L 3.57 7.14" />
      <path d="M 8.14 5.31 L 7.14 3.57" />
      <path d="M 12.00 4.27 L 12.00 2.27" />
      <path d="M 15.86 5.31 L 16.86 3.57" />
      <path d="M 18.69 8.14 L 20.43 7.14" />
      {children}
    </svg>
  );
});

export default StibioHumble;
