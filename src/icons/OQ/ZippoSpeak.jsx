import React from 'react';

export const iconData = {
  "id": "ZippoSpeak",
  "name": "ZippoSpeak",
  "category": "OQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.65 3.59 C 9.95 14.88, 8.67 8.90, 14.50 14.25"
      }
    ],
    [
      "path",
      {
        "d": "M 9.88 3.15 C 19.38 13.20, 9.57 8.93, 15.16 21.85"
      }
    ],
    [
      "path",
      {
        "d": "M 9.26 9.93 C 14.54 16.36, 18.27 11.13, 16.84 19.43"
      }
    ],
    [
      "path",
      {
        "d": "M 9.09 5.67 C 19.70 9.35, 14.46 16.19, 18.06 14.12"
      }
    ],
    [
      "path",
      {
        "d": "M 7.93 9.73 C 10.50 4.26, 11.07 10.60, 20.56 17.64"
      }
    ],
    [
      "path",
      {
        "d": "M 8.84 7.81 C 5.04 7.00, 15.43 12.55, 20.93 20.82"
      }
    ]
  ]
};

export const ZippoSpeak = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.65 3.59 C 9.95 14.88, 8.67 8.90, 14.50 14.25" />
      <path d="M 9.88 3.15 C 19.38 13.20, 9.57 8.93, 15.16 21.85" />
      <path d="M 9.26 9.93 C 14.54 16.36, 18.27 11.13, 16.84 19.43" />
      <path d="M 9.09 5.67 C 19.70 9.35, 14.46 16.19, 18.06 14.12" />
      <path d="M 7.93 9.73 C 10.50 4.26, 11.07 10.60, 20.56 17.64" />
      <path d="M 8.84 7.81 C 5.04 7.00, 15.43 12.55, 20.93 20.82" />
      {children}
    </svg>
  );
});

export default ZippoSpeak;
