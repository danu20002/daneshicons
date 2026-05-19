import React from 'react';

export const iconData = {
  "id": "IridoLunch",
  "name": "IridoLunch",
  "category": "S",
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
        "d": "M 6.68 12.00 a 5.32 5.32 0 1 1 10.64 0 a 5.32 5.32 0 1 1 -10.64 0"
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
        "d": "M 17.84 16.90 L 19.37 18.18"
      }
    ],
    [
      "path",
      {
        "d": "M 13.32 19.50 L 13.67 21.47"
      }
    ],
    [
      "path",
      {
        "d": "M 8.19 18.60 L 7.19 20.33"
      }
    ],
    [
      "path",
      {
        "d": "M 4.84 14.61 L 2.96 15.29"
      }
    ],
    [
      "path",
      {
        "d": "M 4.84 9.39 L 2.96 8.71"
      }
    ],
    [
      "path",
      {
        "d": "M 8.19 5.40 L 7.19 3.67"
      }
    ],
    [
      "path",
      {
        "d": "M 13.32 4.50 L 13.67 2.53"
      }
    ],
    [
      "path",
      {
        "d": "M 17.84 7.10 L 19.37 5.82"
      }
    ]
  ]
};

export const IridoLunch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.68 12.00 a 5.32 5.32 0 1 1 10.64 0 a 5.32 5.32 0 1 1 -10.64 0" />
      <path d="M 19.62 12.00 L 21.62 12.00" />
      <path d="M 17.84 16.90 L 19.37 18.18" />
      <path d="M 13.32 19.50 L 13.67 21.47" />
      <path d="M 8.19 18.60 L 7.19 20.33" />
      <path d="M 4.84 14.61 L 2.96 15.29" />
      <path d="M 4.84 9.39 L 2.96 8.71" />
      <path d="M 8.19 5.40 L 7.19 3.67" />
      <path d="M 13.32 4.50 L 13.67 2.53" />
      <path d="M 17.84 7.10 L 19.37 5.82" />
      {children}
    </svg>
  );
});

export default IridoLunch;
