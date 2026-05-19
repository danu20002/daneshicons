import React from 'react';

export const iconData = {
  "id": "TriboLore",
  "name": "TriboLore",
  "category": "YO",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.14 12.00 a 8.86 8.86 0 1 0 17.71 0 a 8.86 8.86 0 1 0 -17.71 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.51 12.00 a 6.49 6.49 0 1 1 12.98 0 a 6.49 6.49 0 1 1 -12.98 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.36 12.00 L 22.36 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 19.03 16.52 L 20.71 17.60"
      }
    ],
    [
      "path",
      {
        "d": "M 15.47 19.60 L 16.30 21.42"
      }
    ],
    [
      "path",
      {
        "d": "M 10.81 20.27 L 10.53 22.25"
      }
    ],
    [
      "path",
      {
        "d": "M 6.53 18.31 L 5.22 19.83"
      }
    ],
    [
      "path",
      {
        "d": "M 3.98 14.35 L 2.06 14.92"
      }
    ],
    [
      "path",
      {
        "d": "M 3.98 9.65 L 2.06 9.08"
      }
    ],
    [
      "path",
      {
        "d": "M 6.53 5.69 L 5.22 4.17"
      }
    ],
    [
      "path",
      {
        "d": "M 10.81 3.73 L 10.53 1.75"
      }
    ],
    [
      "path",
      {
        "d": "M 15.47 4.40 L 16.30 2.58"
      }
    ],
    [
      "path",
      {
        "d": "M 19.03 7.48 L 20.71 6.40"
      }
    ]
  ]
};

export const TriboLore = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.14 12.00 a 8.86 8.86 0 1 0 17.71 0 a 8.86 8.86 0 1 0 -17.71 0" />
      <path d="M 5.51 12.00 a 6.49 6.49 0 1 1 12.98 0 a 6.49 6.49 0 1 1 -12.98 0" />
      <path d="M 20.36 12.00 L 22.36 12.00" />
      <path d="M 19.03 16.52 L 20.71 17.60" />
      <path d="M 15.47 19.60 L 16.30 21.42" />
      <path d="M 10.81 20.27 L 10.53 22.25" />
      <path d="M 6.53 18.31 L 5.22 19.83" />
      <path d="M 3.98 14.35 L 2.06 14.92" />
      <path d="M 3.98 9.65 L 2.06 9.08" />
      <path d="M 6.53 5.69 L 5.22 4.17" />
      <path d="M 10.81 3.73 L 10.53 1.75" />
      <path d="M 15.47 4.40 L 16.30 2.58" />
      <path d="M 19.03 7.48 L 20.71 6.40" />
      {children}
    </svg>
  );
});

export default TriboLore;
