import React from 'react';

export const iconData = {
  "id": "CosmoVideo",
  "name": "CosmoVideo",
  "category": "Y",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.22 12.00 a 8.78 8.78 0 1 0 17.57 0 a 8.78 8.78 0 1 0 -17.57 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.00 12.00 a 6.00 6.00 0 1 1 12.00 0 a 6.00 6.00 0 1 1 -12.00 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.28 12.00 L 22.28 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.97 16.48 L 20.65 17.56"
      }
    ],
    [
      "path",
      {
        "d": "M 15.44 19.54 L 16.27 21.36"
      }
    ],
    [
      "path",
      {
        "d": "M 10.82 20.20 L 10.54 22.18"
      }
    ],
    [
      "path",
      {
        "d": "M 6.57 18.26 L 5.27 19.77"
      }
    ],
    [
      "path",
      {
        "d": "M 4.05 14.33 L 2.13 14.90"
      }
    ],
    [
      "path",
      {
        "d": "M 4.05 9.67 L 2.13 9.10"
      }
    ],
    [
      "path",
      {
        "d": "M 6.57 5.74 L 5.27 4.23"
      }
    ],
    [
      "path",
      {
        "d": "M 10.82 3.80 L 10.54 1.82"
      }
    ],
    [
      "path",
      {
        "d": "M 15.44 4.46 L 16.27 2.64"
      }
    ],
    [
      "path",
      {
        "d": "M 18.97 7.52 L 20.65 6.44"
      }
    ]
  ]
};

export const CosmoVideo = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.22 12.00 a 8.78 8.78 0 1 0 17.57 0 a 8.78 8.78 0 1 0 -17.57 0" />
      <path d="M 6.00 12.00 a 6.00 6.00 0 1 1 12.00 0 a 6.00 6.00 0 1 1 -12.00 0" />
      <path d="M 20.28 12.00 L 22.28 12.00" />
      <path d="M 18.97 16.48 L 20.65 17.56" />
      <path d="M 15.44 19.54 L 16.27 21.36" />
      <path d="M 10.82 20.20 L 10.54 22.18" />
      <path d="M 6.57 18.26 L 5.27 19.77" />
      <path d="M 4.05 14.33 L 2.13 14.90" />
      <path d="M 4.05 9.67 L 2.13 9.10" />
      <path d="M 6.57 5.74 L 5.27 4.23" />
      <path d="M 10.82 3.80 L 10.54 1.82" />
      <path d="M 15.44 4.46 L 16.27 2.64" />
      <path d="M 18.97 7.52 L 20.65 6.44" />
      {children}
    </svg>
  );
});

export default CosmoVideo;
