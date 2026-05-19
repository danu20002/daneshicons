import React from 'react';

export const iconData = {
  "id": "TegoPicnic",
  "name": "TegoPicnic",
  "category": "FD",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.49 9.17 C 4.82 12.87, 5.45 5.12, 15.25 15.84"
      }
    ],
    [
      "path",
      {
        "d": "M 8.99 9.88 C 18.52 15.87, 11.84 13.05, 19.20 14.39"
      }
    ],
    [
      "path",
      {
        "d": "M 5.49 6.55 C 11.97 6.87, 5.59 19.49, 14.83 20.69"
      }
    ],
    [
      "path",
      {
        "d": "M 7.22 7.20 C 6.64 19.46, 6.81 19.40, 19.04 20.98"
      }
    ],
    [
      "path",
      {
        "d": "M 4.94 5.69 C 9.37 8.95, 18.71 4.85, 18.52 19.48"
      }
    ],
    [
      "path",
      {
        "d": "M 8.39 6.48 C 14.42 9.72, 8.04 5.12, 14.14 14.91"
      }
    ]
  ]
};

export const TegoPicnic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.49 9.17 C 4.82 12.87, 5.45 5.12, 15.25 15.84" />
      <path d="M 8.99 9.88 C 18.52 15.87, 11.84 13.05, 19.20 14.39" />
      <path d="M 5.49 6.55 C 11.97 6.87, 5.59 19.49, 14.83 20.69" />
      <path d="M 7.22 7.20 C 6.64 19.46, 6.81 19.40, 19.04 20.98" />
      <path d="M 4.94 5.69 C 9.37 8.95, 18.71 4.85, 18.52 19.48" />
      <path d="M 8.39 6.48 C 14.42 9.72, 8.04 5.12, 14.14 14.91" />
      {children}
    </svg>
  );
});

export default TegoPicnic;
