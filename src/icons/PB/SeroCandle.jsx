import React from 'react';

export const iconData = {
  "id": "SeroCandle",
  "name": "SeroCandle",
  "category": "PB",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.88 12.00 a 7.12 7.12 0 1 0 14.24 0 a 7.12 7.12 0 1 0 -14.24 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.72 12.00 a 4.28 4.28 0 1 1 8.57 0 a 4.28 4.28 0 1 1 -8.57 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.62 12.00 L 20.62 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.57 15.58 L 19.25 16.66"
      }
    ],
    [
      "path",
      {
        "d": "M 14.75 18.02 L 15.58 19.84"
      }
    ],
    [
      "path",
      {
        "d": "M 11.06 18.55 L 10.77 20.53"
      }
    ],
    [
      "path",
      {
        "d": "M 7.66 17.00 L 6.35 18.52"
      }
    ],
    [
      "path",
      {
        "d": "M 5.65 13.87 L 3.73 14.43"
      }
    ],
    [
      "path",
      {
        "d": "M 5.65 10.13 L 3.73 9.57"
      }
    ],
    [
      "path",
      {
        "d": "M 7.66 7.00 L 6.35 5.48"
      }
    ],
    [
      "path",
      {
        "d": "M 11.06 5.45 L 10.77 3.47"
      }
    ],
    [
      "path",
      {
        "d": "M 14.75 5.98 L 15.58 4.16"
      }
    ],
    [
      "path",
      {
        "d": "M 17.57 8.42 L 19.25 7.34"
      }
    ]
  ]
};

export const SeroCandle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.88 12.00 a 7.12 7.12 0 1 0 14.24 0 a 7.12 7.12 0 1 0 -14.24 0" />
      <path d="M 7.72 12.00 a 4.28 4.28 0 1 1 8.57 0 a 4.28 4.28 0 1 1 -8.57 0" />
      <path d="M 18.62 12.00 L 20.62 12.00" />
      <path d="M 17.57 15.58 L 19.25 16.66" />
      <path d="M 14.75 18.02 L 15.58 19.84" />
      <path d="M 11.06 18.55 L 10.77 20.53" />
      <path d="M 7.66 17.00 L 6.35 18.52" />
      <path d="M 5.65 13.87 L 3.73 14.43" />
      <path d="M 5.65 10.13 L 3.73 9.57" />
      <path d="M 7.66 7.00 L 6.35 5.48" />
      <path d="M 11.06 5.45 L 10.77 3.47" />
      <path d="M 14.75 5.98 L 15.58 4.16" />
      <path d="M 17.57 8.42 L 19.25 7.34" />
      {children}
    </svg>
  );
});

export default SeroCandle;
