import React from 'react';

export const iconData = {
  "id": "HoloLeisure",
  "name": "HoloLeisure",
  "category": "XC",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.98 12.00 a 7.02 7.02 0 1 0 14.05 0 a 7.02 7.02 0 1 0 -14.05 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.34 12.00 a 4.66 4.66 0 1 1 9.33 0 a 4.66 4.66 0 1 1 -9.33 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.52 12.00 L 20.52 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.00 16.19 L 18.53 17.48"
      }
    ],
    [
      "path",
      {
        "d": "M 13.13 18.42 L 13.48 20.39"
      }
    ],
    [
      "path",
      {
        "d": "M 8.74 17.65 L 7.74 19.38"
      }
    ],
    [
      "path",
      {
        "d": "M 5.87 14.23 L 3.99 14.92"
      }
    ],
    [
      "path",
      {
        "d": "M 5.87 9.77 L 3.99 9.08"
      }
    ],
    [
      "path",
      {
        "d": "M 8.74 6.35 L 7.74 4.62"
      }
    ],
    [
      "path",
      {
        "d": "M 13.13 5.58 L 13.48 3.61"
      }
    ],
    [
      "path",
      {
        "d": "M 17.00 7.81 L 18.53 6.52"
      }
    ]
  ]
};

export const HoloLeisure = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.98 12.00 a 7.02 7.02 0 1 0 14.05 0 a 7.02 7.02 0 1 0 -14.05 0" />
      <path d="M 7.34 12.00 a 4.66 4.66 0 1 1 9.33 0 a 4.66 4.66 0 1 1 -9.33 0" />
      <path d="M 18.52 12.00 L 20.52 12.00" />
      <path d="M 17.00 16.19 L 18.53 17.48" />
      <path d="M 13.13 18.42 L 13.48 20.39" />
      <path d="M 8.74 17.65 L 7.74 19.38" />
      <path d="M 5.87 14.23 L 3.99 14.92" />
      <path d="M 5.87 9.77 L 3.99 9.08" />
      <path d="M 8.74 6.35 L 7.74 4.62" />
      <path d="M 13.13 5.58 L 13.48 3.61" />
      <path d="M 17.00 7.81 L 18.53 6.52" />
      {children}
    </svg>
  );
});

export default HoloLeisure;
