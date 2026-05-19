import React from 'react';

export const iconData = {
  "id": "SaturRaft",
  "name": "SaturRaft",
  "category": "RG",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.87 12.00 a 8.13 8.13 0 1 0 16.26 0 a 8.13 8.13 0 1 0 -16.26 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.94 12.00 a 6.06 6.06 0 1 1 12.11 0 a 6.06 6.06 0 1 1 -12.11 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.63 12.00 L 21.63 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.42 16.13 L 20.10 17.21"
      }
    ],
    [
      "path",
      {
        "d": "M 15.17 18.94 L 16.00 20.76"
      }
    ],
    [
      "path",
      {
        "d": "M 10.91 19.55 L 10.63 21.53"
      }
    ],
    [
      "path",
      {
        "d": "M 7.00 17.77 L 5.69 19.28"
      }
    ],
    [
      "path",
      {
        "d": "M 4.68 14.15 L 2.76 14.71"
      }
    ],
    [
      "path",
      {
        "d": "M 4.68 9.85 L 2.76 9.29"
      }
    ],
    [
      "path",
      {
        "d": "M 7.00 6.23 L 5.69 4.72"
      }
    ],
    [
      "path",
      {
        "d": "M 10.91 4.45 L 10.63 2.47"
      }
    ],
    [
      "path",
      {
        "d": "M 15.17 5.06 L 16.00 3.24"
      }
    ],
    [
      "path",
      {
        "d": "M 18.42 7.87 L 20.10 6.79"
      }
    ]
  ]
};

export const SaturRaft = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.87 12.00 a 8.13 8.13 0 1 0 16.26 0 a 8.13 8.13 0 1 0 -16.26 0" />
      <path d="M 5.94 12.00 a 6.06 6.06 0 1 1 12.11 0 a 6.06 6.06 0 1 1 -12.11 0" />
      <path d="M 19.63 12.00 L 21.63 12.00" />
      <path d="M 18.42 16.13 L 20.10 17.21" />
      <path d="M 15.17 18.94 L 16.00 20.76" />
      <path d="M 10.91 19.55 L 10.63 21.53" />
      <path d="M 7.00 17.77 L 5.69 19.28" />
      <path d="M 4.68 14.15 L 2.76 14.71" />
      <path d="M 4.68 9.85 L 2.76 9.29" />
      <path d="M 7.00 6.23 L 5.69 4.72" />
      <path d="M 10.91 4.45 L 10.63 2.47" />
      <path d="M 15.17 5.06 L 16.00 3.24" />
      <path d="M 18.42 7.87 L 20.10 6.79" />
      {children}
    </svg>
  );
});

export default SaturRaft;
