import React from 'react';

export const iconData = {
  "id": "SedimenTuesday",
  "name": "SedimenTuesday",
  "category": "DJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.88 12.00 a 8.12 8.12 0 1 0 16.24 0 a 8.12 8.12 0 1 0 -16.24 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.45 12.00 a 5.55 5.55 0 1 1 11.10 0 a 5.55 5.55 0 1 1 -11.10 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.62 12.00 L 21.62 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.75 17.96 L 18.00 19.52"
      }
    ],
    [
      "path",
      {
        "d": "M 10.30 19.43 L 9.86 21.38"
      }
    ],
    [
      "path",
      {
        "d": "M 5.13 15.31 L 3.33 16.17"
      }
    ],
    [
      "path",
      {
        "d": "M 5.13 8.69 L 3.33 7.83"
      }
    ],
    [
      "path",
      {
        "d": "M 10.30 4.57 L 9.86 2.62"
      }
    ],
    [
      "path",
      {
        "d": "M 16.75 6.04 L 18.00 4.48"
      }
    ]
  ]
};

export const SedimenTuesday = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.88 12.00 a 8.12 8.12 0 1 0 16.24 0 a 8.12 8.12 0 1 0 -16.24 0" />
      <path d="M 6.45 12.00 a 5.55 5.55 0 1 1 11.10 0 a 5.55 5.55 0 1 1 -11.10 0" />
      <path d="M 19.62 12.00 L 21.62 12.00" />
      <path d="M 16.75 17.96 L 18.00 19.52" />
      <path d="M 10.30 19.43 L 9.86 21.38" />
      <path d="M 5.13 15.31 L 3.33 16.17" />
      <path d="M 5.13 8.69 L 3.33 7.83" />
      <path d="M 10.30 4.57 L 9.86 2.62" />
      <path d="M 16.75 6.04 L 18.00 4.48" />
      {children}
    </svg>
  );
});

export default SedimenTuesday;
