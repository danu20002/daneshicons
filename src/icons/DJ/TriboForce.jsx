import React from 'react';

export const iconData = {
  "id": "TriboForce",
  "name": "TriboForce",
  "category": "DJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.53 12.00 a 7.47 7.47 0 1 0 14.95 0 a 7.47 7.47 0 1 0 -14.95 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.51 12.00 a 4.49 4.49 0 1 1 8.98 0 a 4.49 4.49 0 1 1 -8.98 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.97 12.00 L 20.97 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.34 16.48 L 18.87 17.77"
      }
    ],
    [
      "path",
      {
        "d": "M 13.21 18.87 L 13.56 20.84"
      }
    ],
    [
      "path",
      {
        "d": "M 8.51 18.04 L 7.51 19.77"
      }
    ],
    [
      "path",
      {
        "d": "M 5.45 14.38 L 3.57 15.07"
      }
    ],
    [
      "path",
      {
        "d": "M 5.45 9.62 L 3.57 8.93"
      }
    ],
    [
      "path",
      {
        "d": "M 8.51 5.96 L 7.51 4.23"
      }
    ],
    [
      "path",
      {
        "d": "M 13.21 5.13 L 13.56 3.16"
      }
    ],
    [
      "path",
      {
        "d": "M 17.34 7.52 L 18.87 6.23"
      }
    ]
  ]
};

export const TriboForce = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.53 12.00 a 7.47 7.47 0 1 0 14.95 0 a 7.47 7.47 0 1 0 -14.95 0" />
      <path d="M 7.51 12.00 a 4.49 4.49 0 1 1 8.98 0 a 4.49 4.49 0 1 1 -8.98 0" />
      <path d="M 18.97 12.00 L 20.97 12.00" />
      <path d="M 17.34 16.48 L 18.87 17.77" />
      <path d="M 13.21 18.87 L 13.56 20.84" />
      <path d="M 8.51 18.04 L 7.51 19.77" />
      <path d="M 5.45 14.38 L 3.57 15.07" />
      <path d="M 5.45 9.62 L 3.57 8.93" />
      <path d="M 8.51 5.96 L 7.51 4.23" />
      <path d="M 13.21 5.13 L 13.56 3.16" />
      <path d="M 17.34 7.52 L 18.87 6.23" />
      {children}
    </svg>
  );
});

export default TriboForce;
