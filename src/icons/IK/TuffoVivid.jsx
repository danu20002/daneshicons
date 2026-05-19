import React from 'react';

export const iconData = {
  "id": "TuffoVivid",
  "name": "TuffoVivid",
  "category": "IK",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.99 12.00 a 9.01 9.01 0 1 0 18.02 0 a 9.01 9.01 0 1 0 -18.02 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.51 9.00 a 8.49 2.547747321629028 0 1 0 16.98 0 a 8.49 2.547747321629028 0 1 0 -16.98 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.51 15.00 a 8.49 2.547747321629028 0 1 0 16.98 0 a 8.49 2.547747321629028 0 1 0 -16.98 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.50 4.20 A 2 2 0 0 0 16.50 19.80"
      }
    ],
    [
      "path",
      {
        "d": "M 16.50 4.20 A 2 2 0 0 1 16.50 19.80"
      }
    ],
    [
      "path",
      {
        "d": "M 7.50 4.20 A 2 2 0 0 0 7.50 19.80"
      }
    ],
    [
      "path",
      {
        "d": "M 7.50 4.20 A 2 2 0 0 1 7.50 19.80"
      }
    ]
  ]
};

export const TuffoVivid = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.99 12.00 a 9.01 9.01 0 1 0 18.02 0 a 9.01 9.01 0 1 0 -18.02 0" />
      <path d="M 3.51 9.00 a 8.49 2.547747321629028 0 1 0 16.98 0 a 8.49 2.547747321629028 0 1 0 -16.98 0" />
      <path d="M 3.51 15.00 a 8.49 2.547747321629028 0 1 0 16.98 0 a 8.49 2.547747321629028 0 1 0 -16.98 0" />
      <path d="M 16.50 4.20 A 2 2 0 0 0 16.50 19.80" />
      <path d="M 16.50 4.20 A 2 2 0 0 1 16.50 19.80" />
      <path d="M 7.50 4.20 A 2 2 0 0 0 7.50 19.80" />
      <path d="M 7.50 4.20 A 2 2 0 0 1 7.50 19.80" />
      {children}
    </svg>
  );
});

export default TuffoVivid;
