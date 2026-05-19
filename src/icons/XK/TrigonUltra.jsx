import React from 'react';

export const iconData = {
  "id": "TrigonUltra",
  "name": "TrigonUltra",
  "category": "XK",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.28 5.51 C 4.14 16.81, 11.94 18.88, 17.44 21.26"
      }
    ],
    [
      "path",
      {
        "d": "M 5.14 4.07 C 12.57 12.28, 5.67 19.04, 20.72 14.87"
      }
    ],
    [
      "path",
      {
        "d": "M 9.38 3.53 C 17.93 17.94, 6.50 9.22, 20.49 20.41"
      }
    ],
    [
      "path",
      {
        "d": "M 4.38 6.10 C 7.06 19.57, 11.33 17.66, 21.57 20.50"
      }
    ],
    [
      "path",
      {
        "d": "M 8.12 7.20 C 14.02 17.94, 16.25 13.92, 18.98 19.64"
      }
    ],
    [
      "path",
      {
        "d": "M 4.60 8.33 C 6.06 14.02, 18.35 10.12, 14.72 14.54"
      }
    ]
  ]
};

export const TrigonUltra = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.28 5.51 C 4.14 16.81, 11.94 18.88, 17.44 21.26" />
      <path d="M 5.14 4.07 C 12.57 12.28, 5.67 19.04, 20.72 14.87" />
      <path d="M 9.38 3.53 C 17.93 17.94, 6.50 9.22, 20.49 20.41" />
      <path d="M 4.38 6.10 C 7.06 19.57, 11.33 17.66, 21.57 20.50" />
      <path d="M 8.12 7.20 C 14.02 17.94, 16.25 13.92, 18.98 19.64" />
      <path d="M 4.60 8.33 C 6.06 14.02, 18.35 10.12, 14.72 14.54" />
      {children}
    </svg>
  );
});

export default TrigonUltra;
