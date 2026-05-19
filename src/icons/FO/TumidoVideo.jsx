import React from 'react';

export const iconData = {
  "id": "TumidoVideo",
  "name": "TumidoVideo",
  "category": "FO",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.90 12.00 a 7.10 7.10 0 1 0 14.21 0 a 7.10 7.10 0 1 0 -14.21 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.84 12.00 a 4.16 4.16 0 1 1 8.32 0 a 4.16 4.16 0 1 1 -8.32 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.60 12.00 L 20.60 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.30 17.72 L 16.30 19.45"
      }
    ],
    [
      "path",
      {
        "d": "M 8.70 17.72 L 7.70 19.45"
      }
    ],
    [
      "path",
      {
        "d": "M 5.40 12.00 L 3.40 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.70 6.28 L 7.70 4.55"
      }
    ],
    [
      "path",
      {
        "d": "M 15.30 6.28 L 16.30 4.55"
      }
    ]
  ]
};

export const TumidoVideo = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.90 12.00 a 7.10 7.10 0 1 0 14.21 0 a 7.10 7.10 0 1 0 -14.21 0" />
      <path d="M 7.84 12.00 a 4.16 4.16 0 1 1 8.32 0 a 4.16 4.16 0 1 1 -8.32 0" />
      <path d="M 18.60 12.00 L 20.60 12.00" />
      <path d="M 15.30 17.72 L 16.30 19.45" />
      <path d="M 8.70 17.72 L 7.70 19.45" />
      <path d="M 5.40 12.00 L 3.40 12.00" />
      <path d="M 8.70 6.28 L 7.70 4.55" />
      <path d="M 15.30 6.28 L 16.30 4.55" />
      {children}
    </svg>
  );
});

export default TumidoVideo;
