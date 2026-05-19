import React from 'react';

export const iconData = {
  "id": "SubtilTelescope",
  "name": "SubtilTelescope",
  "category": "JF",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.58 12.00 a 8.42 8.42 0 1 0 16.83 0 a 8.42 8.42 0 1 0 -16.83 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.40 12.00 a 5.60 5.60 0 1 1 11.19 0 a 5.60 5.60 0 1 1 -11.19 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.92 12.00 L 21.92 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.86 15.96 L 20.59 16.96"
      }
    ],
    [
      "path",
      {
        "d": "M 15.96 18.86 L 16.96 20.59"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.92 L 12.00 21.92"
      }
    ],
    [
      "path",
      {
        "d": "M 8.04 18.86 L 7.04 20.59"
      }
    ],
    [
      "path",
      {
        "d": "M 5.14 15.96 L 3.41 16.96"
      }
    ],
    [
      "path",
      {
        "d": "M 4.08 12.00 L 2.08 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.14 8.04 L 3.41 7.04"
      }
    ],
    [
      "path",
      {
        "d": "M 8.04 5.14 L 7.04 3.41"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.08 L 12.00 2.08"
      }
    ],
    [
      "path",
      {
        "d": "M 15.96 5.14 L 16.96 3.41"
      }
    ],
    [
      "path",
      {
        "d": "M 18.86 8.04 L 20.59 7.04"
      }
    ]
  ]
};

export const SubtilTelescope = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.58 12.00 a 8.42 8.42 0 1 0 16.83 0 a 8.42 8.42 0 1 0 -16.83 0" />
      <path d="M 6.40 12.00 a 5.60 5.60 0 1 1 11.19 0 a 5.60 5.60 0 1 1 -11.19 0" />
      <path d="M 19.92 12.00 L 21.92 12.00" />
      <path d="M 18.86 15.96 L 20.59 16.96" />
      <path d="M 15.96 18.86 L 16.96 20.59" />
      <path d="M 12.00 19.92 L 12.00 21.92" />
      <path d="M 8.04 18.86 L 7.04 20.59" />
      <path d="M 5.14 15.96 L 3.41 16.96" />
      <path d="M 4.08 12.00 L 2.08 12.00" />
      <path d="M 5.14 8.04 L 3.41 7.04" />
      <path d="M 8.04 5.14 L 7.04 3.41" />
      <path d="M 12.00 4.08 L 12.00 2.08" />
      <path d="M 15.96 5.14 L 16.96 3.41" />
      <path d="M 18.86 8.04 L 20.59 7.04" />
      {children}
    </svg>
  );
});

export default SubtilTelescope;
