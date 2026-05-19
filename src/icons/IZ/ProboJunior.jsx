import React from 'react';

export const iconData = {
  "id": "ProboJunior",
  "name": "ProboJunior",
  "category": "IZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.32 14.72 C 18.90 21.32, 10.51 5.57, 6.59 16.84"
      }
    ],
    [
      "path",
      {
        "d": "M 17.70 21.36 L 8.01 8.46 L 9.37 15.06 L 11.10 19.57"
      }
    ],
    [
      "path",
      {
        "d": "M 5.23 7.71 Q 10.29 7.82 3.42 4.24"
      }
    ],
    [
      "path",
      {
        "d": "M 18.29 6.83 C 2.36 20.04, 15.88 7.70, 14.92 9.14"
      }
    ],
    [
      "path",
      {
        "d": "M 2.81 11.95 C 12.81 7.39, 8.61 4.97, 4.24 10.40"
      }
    ]
  ]
};

export const ProboJunior = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.32 14.72 C 18.90 21.32, 10.51 5.57, 6.59 16.84" />
      <path d="M 17.70 21.36 L 8.01 8.46 L 9.37 15.06 L 11.10 19.57" />
      <path d="M 5.23 7.71 Q 10.29 7.82 3.42 4.24" />
      <path d="M 18.29 6.83 C 2.36 20.04, 15.88 7.70, 14.92 9.14" />
      <path d="M 2.81 11.95 C 12.81 7.39, 8.61 4.97, 4.24 10.40" />
      {children}
    </svg>
  );
});

export default ProboJunior;
