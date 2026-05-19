import React from 'react';

export const iconData = {
  "id": "TransTrill",
  "name": "TransTrill",
  "category": "FD",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.64 7.18 C 5.60 4.33, 6.72 4.51, 15.45 20.24"
      }
    ],
    [
      "path",
      {
        "d": "M 3.26 5.62 C 17.34 14.12, 11.46 6.66, 17.42 14.27"
      }
    ],
    [
      "path",
      {
        "d": "M 8.38 8.08 C 7.33 8.18, 12.97 15.65, 21.60 17.70"
      }
    ],
    [
      "path",
      {
        "d": "M 4.41 8.66 C 4.01 4.18, 4.62 9.30, 19.90 19.36"
      }
    ],
    [
      "path",
      {
        "d": "M 6.14 3.57 C 4.99 8.15, 6.99 14.08, 14.67 17.63"
      }
    ]
  ]
};

export const TransTrill = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.64 7.18 C 5.60 4.33, 6.72 4.51, 15.45 20.24" />
      <path d="M 3.26 5.62 C 17.34 14.12, 11.46 6.66, 17.42 14.27" />
      <path d="M 8.38 8.08 C 7.33 8.18, 12.97 15.65, 21.60 17.70" />
      <path d="M 4.41 8.66 C 4.01 4.18, 4.62 9.30, 19.90 19.36" />
      <path d="M 6.14 3.57 C 4.99 8.15, 6.99 14.08, 14.67 17.63" />
      {children}
    </svg>
  );
});

export default TransTrill;
