import React from 'react';

export const iconData = {
  "id": "UmidiInspect",
  "name": "UmidiInspect",
  "category": "CQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.14 12.00 a 7.86 7.86 0 1 0 15.71 0 a 7.86 7.86 0 1 0 -15.71 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.11 12.00 a 5.89 5.89 0 1 1 11.78 0 a 5.89 5.89 0 1 1 -11.78 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.36 12.00 L 21.36 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.19 15.98 L 19.87 17.06"
      }
    ],
    [
      "path",
      {
        "d": "M 15.06 18.69 L 15.89 20.51"
      }
    ],
    [
      "path",
      {
        "d": "M 10.95 19.28 L 10.67 21.26"
      }
    ],
    [
      "path",
      {
        "d": "M 7.18 17.56 L 5.87 19.07"
      }
    ],
    [
      "path",
      {
        "d": "M 4.94 14.07 L 3.02 14.64"
      }
    ],
    [
      "path",
      {
        "d": "M 4.94 9.93 L 3.02 9.36"
      }
    ],
    [
      "path",
      {
        "d": "M 7.18 6.44 L 5.87 4.93"
      }
    ],
    [
      "path",
      {
        "d": "M 10.95 4.72 L 10.67 2.74"
      }
    ],
    [
      "path",
      {
        "d": "M 15.06 5.31 L 15.89 3.49"
      }
    ],
    [
      "path",
      {
        "d": "M 18.19 8.02 L 19.87 6.94"
      }
    ]
  ]
};

export const UmidiInspect = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.14 12.00 a 7.86 7.86 0 1 0 15.71 0 a 7.86 7.86 0 1 0 -15.71 0" />
      <path d="M 6.11 12.00 a 5.89 5.89 0 1 1 11.78 0 a 5.89 5.89 0 1 1 -11.78 0" />
      <path d="M 19.36 12.00 L 21.36 12.00" />
      <path d="M 18.19 15.98 L 19.87 17.06" />
      <path d="M 15.06 18.69 L 15.89 20.51" />
      <path d="M 10.95 19.28 L 10.67 21.26" />
      <path d="M 7.18 17.56 L 5.87 19.07" />
      <path d="M 4.94 14.07 L 3.02 14.64" />
      <path d="M 4.94 9.93 L 3.02 9.36" />
      <path d="M 7.18 6.44 L 5.87 4.93" />
      <path d="M 10.95 4.72 L 10.67 2.74" />
      <path d="M 15.06 5.31 L 15.89 3.49" />
      <path d="M 18.19 8.02 L 19.87 6.94" />
      {children}
    </svg>
  );
});

export default UmidiInspect;
