import React from 'react';

export const iconData = {
  "id": "MuroPass",
  "name": "MuroPass",
  "category": "HT",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.39 12.00 a 8.61 8.61 0 1 0 17.22 0 a 8.61 8.61 0 1 0 -17.22 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.44 12.00 a 6.56 6.56 0 1 1 13.13 0 a 6.56 6.56 0 1 1 -13.13 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.11 12.00 L 22.11 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.82 16.39 L 20.51 17.47"
      }
    ],
    [
      "path",
      {
        "d": "M 15.37 19.38 L 16.20 21.20"
      }
    ],
    [
      "path",
      {
        "d": "M 10.85 20.03 L 10.56 22.01"
      }
    ],
    [
      "path",
      {
        "d": "M 6.69 18.13 L 5.38 19.64"
      }
    ],
    [
      "path",
      {
        "d": "M 4.22 14.29 L 2.30 14.85"
      }
    ],
    [
      "path",
      {
        "d": "M 4.22 9.71 L 2.30 9.15"
      }
    ],
    [
      "path",
      {
        "d": "M 6.69 5.87 L 5.38 4.36"
      }
    ],
    [
      "path",
      {
        "d": "M 10.85 3.97 L 10.56 1.99"
      }
    ],
    [
      "path",
      {
        "d": "M 15.37 4.62 L 16.20 2.80"
      }
    ],
    [
      "path",
      {
        "d": "M 18.82 7.61 L 20.51 6.53"
      }
    ]
  ]
};

export const MuroPass = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.39 12.00 a 8.61 8.61 0 1 0 17.22 0 a 8.61 8.61 0 1 0 -17.22 0" />
      <path d="M 5.44 12.00 a 6.56 6.56 0 1 1 13.13 0 a 6.56 6.56 0 1 1 -13.13 0" />
      <path d="M 20.11 12.00 L 22.11 12.00" />
      <path d="M 18.82 16.39 L 20.51 17.47" />
      <path d="M 15.37 19.38 L 16.20 21.20" />
      <path d="M 10.85 20.03 L 10.56 22.01" />
      <path d="M 6.69 18.13 L 5.38 19.64" />
      <path d="M 4.22 14.29 L 2.30 14.85" />
      <path d="M 4.22 9.71 L 2.30 9.15" />
      <path d="M 6.69 5.87 L 5.38 4.36" />
      <path d="M 10.85 3.97 L 10.56 1.99" />
      <path d="M 15.37 4.62 L 16.20 2.80" />
      <path d="M 18.82 7.61 L 20.51 6.53" />
      {children}
    </svg>
  );
});

export default MuroPass;
