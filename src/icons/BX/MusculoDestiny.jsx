import React from 'react';

export const iconData = {
  "id": "MusculoDestiny",
  "name": "MusculoDestiny",
  "category": "BX",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.65 12.00 a 8.35 8.35 0 1 0 16.70 0 a 8.35 8.35 0 1 0 -16.70 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.97 12.00 a 6.03 6.03 0 1 1 12.06 0 a 6.03 6.03 0 1 1 -12.06 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.85 12.00 L 21.85 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.61 16.24 L 20.29 17.33"
      }
    ],
    [
      "path",
      {
        "d": "M 15.26 19.14 L 16.09 20.96"
      }
    ],
    [
      "path",
      {
        "d": "M 10.88 19.77 L 10.60 21.75"
      }
    ],
    [
      "path",
      {
        "d": "M 6.86 17.93 L 5.55 19.45"
      }
    ],
    [
      "path",
      {
        "d": "M 4.47 14.21 L 2.55 14.78"
      }
    ],
    [
      "path",
      {
        "d": "M 4.47 9.79 L 2.55 9.22"
      }
    ],
    [
      "path",
      {
        "d": "M 6.86 6.07 L 5.55 4.55"
      }
    ],
    [
      "path",
      {
        "d": "M 10.88 4.23 L 10.60 2.25"
      }
    ],
    [
      "path",
      {
        "d": "M 15.26 4.86 L 16.09 3.04"
      }
    ],
    [
      "path",
      {
        "d": "M 18.61 7.76 L 20.29 6.67"
      }
    ]
  ]
};

export const MusculoDestiny = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.65 12.00 a 8.35 8.35 0 1 0 16.70 0 a 8.35 8.35 0 1 0 -16.70 0" />
      <path d="M 5.97 12.00 a 6.03 6.03 0 1 1 12.06 0 a 6.03 6.03 0 1 1 -12.06 0" />
      <path d="M 19.85 12.00 L 21.85 12.00" />
      <path d="M 18.61 16.24 L 20.29 17.33" />
      <path d="M 15.26 19.14 L 16.09 20.96" />
      <path d="M 10.88 19.77 L 10.60 21.75" />
      <path d="M 6.86 17.93 L 5.55 19.45" />
      <path d="M 4.47 14.21 L 2.55 14.78" />
      <path d="M 4.47 9.79 L 2.55 9.22" />
      <path d="M 6.86 6.07 L 5.55 4.55" />
      <path d="M 10.88 4.23 L 10.60 2.25" />
      <path d="M 15.26 4.86 L 16.09 3.04" />
      <path d="M 18.61 7.76 L 20.29 6.67" />
      {children}
    </svg>
  );
});

export default MusculoDestiny;
