import React from 'react';

export const iconData = {
  "id": "VedovoEmblem",
  "name": "VedovoEmblem",
  "category": "JY",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.33 12.00 a 7.67 7.67 0 1 0 15.34 0 a 7.67 7.67 0 1 0 -15.34 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.50 12.00 a 5.50 5.50 0 1 1 11.00 0 a 5.50 5.50 0 1 1 -11.00 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.17 12.00 L 21.17 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.03 15.88 L 19.71 16.96"
      }
    ],
    [
      "path",
      {
        "d": "M 14.98 18.52 L 15.81 20.34"
      }
    ],
    [
      "path",
      {
        "d": "M 10.98 19.10 L 10.70 21.08"
      }
    ],
    [
      "path",
      {
        "d": "M 7.31 17.42 L 6.00 18.93"
      }
    ],
    [
      "path",
      {
        "d": "M 5.12 14.02 L 3.20 14.58"
      }
    ],
    [
      "path",
      {
        "d": "M 5.12 9.98 L 3.20 9.42"
      }
    ],
    [
      "path",
      {
        "d": "M 7.31 6.58 L 6.00 5.07"
      }
    ],
    [
      "path",
      {
        "d": "M 10.98 4.90 L 10.70 2.92"
      }
    ],
    [
      "path",
      {
        "d": "M 14.98 5.48 L 15.81 3.66"
      }
    ],
    [
      "path",
      {
        "d": "M 18.03 8.12 L 19.71 7.04"
      }
    ]
  ]
};

export const VedovoEmblem = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.33 12.00 a 7.67 7.67 0 1 0 15.34 0 a 7.67 7.67 0 1 0 -15.34 0" />
      <path d="M 6.50 12.00 a 5.50 5.50 0 1 1 11.00 0 a 5.50 5.50 0 1 1 -11.00 0" />
      <path d="M 19.17 12.00 L 21.17 12.00" />
      <path d="M 18.03 15.88 L 19.71 16.96" />
      <path d="M 14.98 18.52 L 15.81 20.34" />
      <path d="M 10.98 19.10 L 10.70 21.08" />
      <path d="M 7.31 17.42 L 6.00 18.93" />
      <path d="M 5.12 14.02 L 3.20 14.58" />
      <path d="M 5.12 9.98 L 3.20 9.42" />
      <path d="M 7.31 6.58 L 6.00 5.07" />
      <path d="M 10.98 4.90 L 10.70 2.92" />
      <path d="M 14.98 5.48 L 15.81 3.66" />
      <path d="M 18.03 8.12 L 19.71 7.04" />
      {children}
    </svg>
  );
});

export default VedovoEmblem;
