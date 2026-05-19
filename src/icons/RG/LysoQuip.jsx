import React from 'react';

export const iconData = {
  "id": "LysoQuip",
  "name": "LysoQuip",
  "category": "RG",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.61 12.00 a 7.39 7.39 0 1 0 14.78 0 a 7.39 7.39 0 1 0 -14.78 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.34 12.00 a 5.66 5.66 0 1 1 11.32 0 a 5.66 5.66 0 1 1 -11.32 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.89 12.00 L 20.89 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.97 15.45 L 19.70 16.45"
      }
    ],
    [
      "path",
      {
        "d": "M 15.45 17.97 L 16.45 19.70"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 18.89 L 12.00 20.89"
      }
    ],
    [
      "path",
      {
        "d": "M 8.55 17.97 L 7.55 19.70"
      }
    ],
    [
      "path",
      {
        "d": "M 6.03 15.45 L 4.30 16.45"
      }
    ],
    [
      "path",
      {
        "d": "M 5.11 12.00 L 3.11 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.03 8.55 L 4.30 7.55"
      }
    ],
    [
      "path",
      {
        "d": "M 8.55 6.03 L 7.55 4.30"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.11 L 12.00 3.11"
      }
    ],
    [
      "path",
      {
        "d": "M 15.45 6.03 L 16.45 4.30"
      }
    ],
    [
      "path",
      {
        "d": "M 17.97 8.55 L 19.70 7.55"
      }
    ]
  ]
};

export const LysoQuip = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.61 12.00 a 7.39 7.39 0 1 0 14.78 0 a 7.39 7.39 0 1 0 -14.78 0" />
      <path d="M 6.34 12.00 a 5.66 5.66 0 1 1 11.32 0 a 5.66 5.66 0 1 1 -11.32 0" />
      <path d="M 18.89 12.00 L 20.89 12.00" />
      <path d="M 17.97 15.45 L 19.70 16.45" />
      <path d="M 15.45 17.97 L 16.45 19.70" />
      <path d="M 12.00 18.89 L 12.00 20.89" />
      <path d="M 8.55 17.97 L 7.55 19.70" />
      <path d="M 6.03 15.45 L 4.30 16.45" />
      <path d="M 5.11 12.00 L 3.11 12.00" />
      <path d="M 6.03 8.55 L 4.30 7.55" />
      <path d="M 8.55 6.03 L 7.55 4.30" />
      <path d="M 12.00 5.11 L 12.00 3.11" />
      <path d="M 15.45 6.03 L 16.45 4.30" />
      <path d="M 17.97 8.55 L 19.70 7.55" />
      {children}
    </svg>
  );
});

export default LysoQuip;
