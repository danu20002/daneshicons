import React from 'react';

export const iconData = {
  "id": "QuestoSource",
  "name": "QuestoSource",
  "category": "JF",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.56 12.00 a 8.44 8.44 0 1 0 16.87 0 a 8.44 8.44 0 1 0 -16.87 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.56 12.00 a 5.44 5.44 0 1 1 10.87 0 a 5.44 5.44 0 1 1 -10.87 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.94 12.00 L 21.94 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.08 17.10 L 19.61 18.39"
      }
    ],
    [
      "path",
      {
        "d": "M 13.38 19.82 L 13.73 21.78"
      }
    ],
    [
      "path",
      {
        "d": "M 8.03 18.87 L 7.03 20.60"
      }
    ],
    [
      "path",
      {
        "d": "M 4.54 14.71 L 2.66 15.40"
      }
    ],
    [
      "path",
      {
        "d": "M 4.54 9.29 L 2.66 8.60"
      }
    ],
    [
      "path",
      {
        "d": "M 8.03 5.13 L 7.03 3.40"
      }
    ],
    [
      "path",
      {
        "d": "M 13.38 4.18 L 13.73 2.22"
      }
    ],
    [
      "path",
      {
        "d": "M 18.08 6.90 L 19.61 5.61"
      }
    ]
  ]
};

export const QuestoSource = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.56 12.00 a 8.44 8.44 0 1 0 16.87 0 a 8.44 8.44 0 1 0 -16.87 0" />
      <path d="M 6.56 12.00 a 5.44 5.44 0 1 1 10.87 0 a 5.44 5.44 0 1 1 -10.87 0" />
      <path d="M 19.94 12.00 L 21.94 12.00" />
      <path d="M 18.08 17.10 L 19.61 18.39" />
      <path d="M 13.38 19.82 L 13.73 21.78" />
      <path d="M 8.03 18.87 L 7.03 20.60" />
      <path d="M 4.54 14.71 L 2.66 15.40" />
      <path d="M 4.54 9.29 L 2.66 8.60" />
      <path d="M 8.03 5.13 L 7.03 3.40" />
      <path d="M 13.38 4.18 L 13.73 2.22" />
      <path d="M 18.08 6.90 L 19.61 5.61" />
      {children}
    </svg>
  );
});

export default QuestoSource;
