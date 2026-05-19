import React from 'react';

export const iconData = {
  "id": "PhotoReign",
  "name": "PhotoReign",
  "category": "HA",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.80 12.00 a 7.20 7.20 0 1 0 14.39 0 a 7.20 7.20 0 1 0 -14.39 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.44 12.00 a 5.56 5.56 0 1 1 11.12 0 a 5.56 5.56 0 1 1 -11.12 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.70 12.00 L 20.70 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.80 15.35 L 19.53 16.35"
      }
    ],
    [
      "path",
      {
        "d": "M 15.35 17.80 L 16.35 19.53"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 18.70 L 12.00 20.70"
      }
    ],
    [
      "path",
      {
        "d": "M 8.65 17.80 L 7.65 19.53"
      }
    ],
    [
      "path",
      {
        "d": "M 6.20 15.35 L 4.47 16.35"
      }
    ],
    [
      "path",
      {
        "d": "M 5.30 12.00 L 3.30 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.20 8.65 L 4.47 7.65"
      }
    ],
    [
      "path",
      {
        "d": "M 8.65 6.20 L 7.65 4.47"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.30 L 12.00 3.30"
      }
    ],
    [
      "path",
      {
        "d": "M 15.35 6.20 L 16.35 4.47"
      }
    ],
    [
      "path",
      {
        "d": "M 17.80 8.65 L 19.53 7.65"
      }
    ]
  ]
};

export const PhotoReign = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.80 12.00 a 7.20 7.20 0 1 0 14.39 0 a 7.20 7.20 0 1 0 -14.39 0" />
      <path d="M 6.44 12.00 a 5.56 5.56 0 1 1 11.12 0 a 5.56 5.56 0 1 1 -11.12 0" />
      <path d="M 18.70 12.00 L 20.70 12.00" />
      <path d="M 17.80 15.35 L 19.53 16.35" />
      <path d="M 15.35 17.80 L 16.35 19.53" />
      <path d="M 12.00 18.70 L 12.00 20.70" />
      <path d="M 8.65 17.80 L 7.65 19.53" />
      <path d="M 6.20 15.35 L 4.47 16.35" />
      <path d="M 5.30 12.00 L 3.30 12.00" />
      <path d="M 6.20 8.65 L 4.47 7.65" />
      <path d="M 8.65 6.20 L 7.65 4.47" />
      <path d="M 12.00 5.30 L 12.00 3.30" />
      <path d="M 15.35 6.20 L 16.35 4.47" />
      <path d="M 17.80 8.65 L 19.53 7.65" />
      {children}
    </svg>
  );
});

export default PhotoReign;
