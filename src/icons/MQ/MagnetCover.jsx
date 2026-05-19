import React from 'react';

export const iconData = {
  "id": "MagnetCover",
  "name": "MagnetCover",
  "category": "MQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.47 3.61 C 4.15 19.69, 17.66 11.59, 14.83 11.44"
      }
    ],
    [
      "path",
      {
        "d": "M 17.80 20.28 Q 19.28 16.35 15.22 15.30"
      }
    ],
    [
      "path",
      {
        "d": "M 11.22 13.77 A 2.90 3.49 27 0 0 3.22 12.80"
      }
    ],
    [
      "path",
      {
        "d": "M 7.25 21.65 L 3.32 18.30"
      }
    ],
    [
      "path",
      {
        "d": "M 11.22 15.79 C 12.60 5.36, 9.30 20.32, 12.73 11.73"
      }
    ]
  ]
};

export const MagnetCover = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.47 3.61 C 4.15 19.69, 17.66 11.59, 14.83 11.44" />
      <path d="M 17.80 20.28 Q 19.28 16.35 15.22 15.30" />
      <path d="M 11.22 13.77 A 2.90 3.49 27 0 0 3.22 12.80" />
      <path d="M 7.25 21.65 L 3.32 18.30" />
      <path d="M 11.22 15.79 C 12.60 5.36, 9.30 20.32, 12.73 11.73" />
      {children}
    </svg>
  );
});

export default MagnetCover;
