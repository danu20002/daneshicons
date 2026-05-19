import React from 'react';

export const iconData = {
  "id": "UrticeLoft",
  "name": "UrticeLoft",
  "category": "RO",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.63 9.69 C 19.90 17.32, 13.62 8.57, 21.85 19.20"
      }
    ],
    [
      "path",
      {
        "d": "M 6.33 4.47 C 10.34 12.49, 16.44 4.13, 17.88 14.30"
      }
    ],
    [
      "path",
      {
        "d": "M 8.91 4.07 C 13.47 16.39, 4.79 19.03, 17.43 19.39"
      }
    ],
    [
      "path",
      {
        "d": "M 4.69 2.10 C 6.56 7.50, 9.81 7.15, 16.76 21.57"
      }
    ],
    [
      "path",
      {
        "d": "M 7.58 5.54 C 13.39 15.88, 9.97 4.45, 16.91 20.70"
      }
    ],
    [
      "path",
      {
        "d": "M 5.87 8.90 C 4.07 7.43, 9.85 11.46, 20.83 15.59"
      }
    ]
  ]
};

export const UrticeLoft = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.63 9.69 C 19.90 17.32, 13.62 8.57, 21.85 19.20" />
      <path d="M 6.33 4.47 C 10.34 12.49, 16.44 4.13, 17.88 14.30" />
      <path d="M 8.91 4.07 C 13.47 16.39, 4.79 19.03, 17.43 19.39" />
      <path d="M 4.69 2.10 C 6.56 7.50, 9.81 7.15, 16.76 21.57" />
      <path d="M 7.58 5.54 C 13.39 15.88, 9.97 4.45, 16.91 20.70" />
      <path d="M 5.87 8.90 C 4.07 7.43, 9.85 11.46, 20.83 15.59" />
      {children}
    </svg>
  );
});

export default UrticeLoft;
