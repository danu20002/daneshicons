import React from 'react';

export const iconData = {
  "id": "NeuroCocoon",
  "name": "NeuroCocoon",
  "category": "GA",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.88 12.00 Q 16.66 13.52 19.99 17.81"
      }
    ],
    [
      "path",
      {
        "d": "M 19.99 17.81 Q 14.88 15.97 15.05 21.40"
      }
    ],
    [
      "path",
      {
        "d": "M 15.05 21.40 Q 12.00 16.90 8.95 21.40"
      }
    ],
    [
      "path",
      {
        "d": "M 8.95 21.40 Q 9.12 15.97 4.01 17.81"
      }
    ],
    [
      "path",
      {
        "d": "M 4.01 17.81 Q 7.34 13.52 2.12 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.12 12.00 Q 7.34 10.48 4.01 6.19"
      }
    ],
    [
      "path",
      {
        "d": "M 4.01 6.19 Q 9.12 8.03 8.95 2.60"
      }
    ],
    [
      "path",
      {
        "d": "M 8.95 2.60 Q 12.00 7.10 15.05 2.60"
      }
    ],
    [
      "path",
      {
        "d": "M 15.05 2.60 Q 14.88 8.03 19.99 6.19"
      }
    ],
    [
      "path",
      {
        "d": "M 19.99 6.19 Q 16.66 10.48 21.88 12.00"
      }
    ]
  ]
};

export const NeuroCocoon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.88 12.00 Q 16.66 13.52 19.99 17.81" />
      <path d="M 19.99 17.81 Q 14.88 15.97 15.05 21.40" />
      <path d="M 15.05 21.40 Q 12.00 16.90 8.95 21.40" />
      <path d="M 8.95 21.40 Q 9.12 15.97 4.01 17.81" />
      <path d="M 4.01 17.81 Q 7.34 13.52 2.12 12.00" />
      <path d="M 2.12 12.00 Q 7.34 10.48 4.01 6.19" />
      <path d="M 4.01 6.19 Q 9.12 8.03 8.95 2.60" />
      <path d="M 8.95 2.60 Q 12.00 7.10 15.05 2.60" />
      <path d="M 15.05 2.60 Q 14.88 8.03 19.99 6.19" />
      <path d="M 19.99 6.19 Q 16.66 10.48 21.88 12.00" />
      {children}
    </svg>
  );
});

export default NeuroCocoon;
