import React from 'react';

export const iconData = {
  "id": "YodelState",
  "name": "YodelState",
  "category": "JM",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.59 12.00 a 2.41 2.41 0 1 0 4.82 0 a 2.41 2.41 0 1 0 -4.82 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.94 12.00 a 4.06 4.06 0 1 0 8.12 0 a 4.06 4.06 0 1 0 -8.12 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.74 12.00 a 5.26 5.26 0 1 0 10.52 0 a 5.26 5.26 0 1 0 -10.52 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.91 12.00 a 7.09 7.09 0 1 0 14.18 0 a 7.09 7.09 0 1 0 -14.18 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.18 12.00 a 8.82 8.82 0 1 0 17.64 0 a 8.82 8.82 0 1 0 -17.64 0"
      }
    ]
  ]
};

export const YodelState = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.59 12.00 a 2.41 2.41 0 1 0 4.82 0 a 2.41 2.41 0 1 0 -4.82 0" />
      <path d="M 7.94 12.00 a 4.06 4.06 0 1 0 8.12 0 a 4.06 4.06 0 1 0 -8.12 0" />
      <path d="M 6.74 12.00 a 5.26 5.26 0 1 0 10.52 0 a 5.26 5.26 0 1 0 -10.52 0" />
      <path d="M 4.91 12.00 a 7.09 7.09 0 1 0 14.18 0 a 7.09 7.09 0 1 0 -14.18 0" />
      <path d="M 3.18 12.00 a 8.82 8.82 0 1 0 17.64 0 a 8.82 8.82 0 1 0 -17.64 0" />
      {children}
    </svg>
  );
});

export default YodelState;
