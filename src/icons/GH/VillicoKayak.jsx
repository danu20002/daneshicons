import React from 'react';

export const iconData = {
  "id": "VillicoKayak",
  "name": "VillicoKayak",
  "category": "GH",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.31 12.00 a 8.69 8.69 0 1 0 17.37 0 a 8.69 8.69 0 1 0 -17.37 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.17 12.00 a 5.83 5.83 0 1 1 11.66 0 a 5.83 5.83 0 1 1 -11.66 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.19 12.00 L 22.19 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.27 17.26 L 19.80 18.55"
      }
    ],
    [
      "path",
      {
        "d": "M 13.42 20.06 L 13.77 22.03"
      }
    ],
    [
      "path",
      {
        "d": "M 7.91 19.09 L 6.91 20.82"
      }
    ],
    [
      "path",
      {
        "d": "M 4.31 14.80 L 2.43 15.48"
      }
    ],
    [
      "path",
      {
        "d": "M 4.31 9.20 L 2.43 8.52"
      }
    ],
    [
      "path",
      {
        "d": "M 7.91 4.91 L 6.91 3.18"
      }
    ],
    [
      "path",
      {
        "d": "M 13.42 3.94 L 13.77 1.97"
      }
    ],
    [
      "path",
      {
        "d": "M 18.27 6.74 L 19.80 5.45"
      }
    ]
  ]
};

export const VillicoKayak = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.31 12.00 a 8.69 8.69 0 1 0 17.37 0 a 8.69 8.69 0 1 0 -17.37 0" />
      <path d="M 6.17 12.00 a 5.83 5.83 0 1 1 11.66 0 a 5.83 5.83 0 1 1 -11.66 0" />
      <path d="M 20.19 12.00 L 22.19 12.00" />
      <path d="M 18.27 17.26 L 19.80 18.55" />
      <path d="M 13.42 20.06 L 13.77 22.03" />
      <path d="M 7.91 19.09 L 6.91 20.82" />
      <path d="M 4.31 14.80 L 2.43 15.48" />
      <path d="M 4.31 9.20 L 2.43 8.52" />
      <path d="M 7.91 4.91 L 6.91 3.18" />
      <path d="M 13.42 3.94 L 13.77 1.97" />
      <path d="M 18.27 6.74 L 19.80 5.45" />
      {children}
    </svg>
  );
});

export default VillicoKayak;
