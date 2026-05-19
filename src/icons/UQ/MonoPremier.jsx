import React from 'react';

export const iconData = {
  "id": "MonoPremier",
  "name": "MonoPremier",
  "category": "UQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.83 12.00 Q 16.09 13.33 19.95 17.78"
      }
    ],
    [
      "path",
      {
        "d": "M 19.95 17.78 Q 14.53 15.48 15.04 21.35"
      }
    ],
    [
      "path",
      {
        "d": "M 15.04 21.35 Q 12.00 16.30 8.96 21.35"
      }
    ],
    [
      "path",
      {
        "d": "M 8.96 21.35 Q 9.47 15.48 4.05 17.78"
      }
    ],
    [
      "path",
      {
        "d": "M 4.05 17.78 Q 7.91 13.33 2.17 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.17 12.00 Q 7.91 10.67 4.05 6.22"
      }
    ],
    [
      "path",
      {
        "d": "M 4.05 6.22 Q 9.47 8.52 8.96 2.65"
      }
    ],
    [
      "path",
      {
        "d": "M 8.96 2.65 Q 12.00 7.70 15.04 2.65"
      }
    ],
    [
      "path",
      {
        "d": "M 15.04 2.65 Q 14.53 8.52 19.95 6.22"
      }
    ],
    [
      "path",
      {
        "d": "M 19.95 6.22 Q 16.09 10.67 21.83 12.00"
      }
    ]
  ]
};

export const MonoPremier = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.83 12.00 Q 16.09 13.33 19.95 17.78" />
      <path d="M 19.95 17.78 Q 14.53 15.48 15.04 21.35" />
      <path d="M 15.04 21.35 Q 12.00 16.30 8.96 21.35" />
      <path d="M 8.96 21.35 Q 9.47 15.48 4.05 17.78" />
      <path d="M 4.05 17.78 Q 7.91 13.33 2.17 12.00" />
      <path d="M 2.17 12.00 Q 7.91 10.67 4.05 6.22" />
      <path d="M 4.05 6.22 Q 9.47 8.52 8.96 2.65" />
      <path d="M 8.96 2.65 Q 12.00 7.70 15.04 2.65" />
      <path d="M 15.04 2.65 Q 14.53 8.52 19.95 6.22" />
      <path d="M 19.95 6.22 Q 16.09 10.67 21.83 12.00" />
      {children}
    </svg>
  );
});

export default MonoPremier;
