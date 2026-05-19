import React from 'react';

export const iconData = {
  "id": "SinterSweat",
  "name": "SinterSweat",
  "category": "TL",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.13 12.00 a 8.87 8.87 0 1 0 17.74 0 a 8.87 8.87 0 1 0 -17.74 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.27 12.00 a 6.73 6.73 0 1 1 13.47 0 a 6.73 6.73 0 1 1 -13.47 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.37 12.00 L 22.37 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 19.25 16.18 L 20.98 17.18"
      }
    ],
    [
      "path",
      {
        "d": "M 16.18 19.25 L 17.18 20.98"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.37 L 12.00 22.37"
      }
    ],
    [
      "path",
      {
        "d": "M 7.82 19.25 L 6.82 20.98"
      }
    ],
    [
      "path",
      {
        "d": "M 4.75 16.18 L 3.02 17.18"
      }
    ],
    [
      "path",
      {
        "d": "M 3.63 12.00 L 1.63 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 4.75 7.82 L 3.02 6.82"
      }
    ],
    [
      "path",
      {
        "d": "M 7.82 4.75 L 6.82 3.02"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.63 L 12.00 1.63"
      }
    ],
    [
      "path",
      {
        "d": "M 16.18 4.75 L 17.18 3.02"
      }
    ],
    [
      "path",
      {
        "d": "M 19.25 7.82 L 20.98 6.82"
      }
    ]
  ]
};

export const SinterSweat = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.13 12.00 a 8.87 8.87 0 1 0 17.74 0 a 8.87 8.87 0 1 0 -17.74 0" />
      <path d="M 5.27 12.00 a 6.73 6.73 0 1 1 13.47 0 a 6.73 6.73 0 1 1 -13.47 0" />
      <path d="M 20.37 12.00 L 22.37 12.00" />
      <path d="M 19.25 16.18 L 20.98 17.18" />
      <path d="M 16.18 19.25 L 17.18 20.98" />
      <path d="M 12.00 20.37 L 12.00 22.37" />
      <path d="M 7.82 19.25 L 6.82 20.98" />
      <path d="M 4.75 16.18 L 3.02 17.18" />
      <path d="M 3.63 12.00 L 1.63 12.00" />
      <path d="M 4.75 7.82 L 3.02 6.82" />
      <path d="M 7.82 4.75 L 6.82 3.02" />
      <path d="M 12.00 3.63 L 12.00 1.63" />
      <path d="M 16.18 4.75 L 17.18 3.02" />
      <path d="M 19.25 7.82 L 20.98 6.82" />
      {children}
    </svg>
  );
});

export default SinterSweat;
