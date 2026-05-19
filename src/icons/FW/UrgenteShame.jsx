import React from 'react';

export const iconData = {
  "id": "UrgenteShame",
  "name": "UrgenteShame",
  "category": "FW",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.36 9.85 C 8.47 5.93, 16.50 15.75, 14.07 19.25"
      }
    ],
    [
      "path",
      {
        "d": "M 4.41 5.01 C 11.39 16.15, 4.17 7.85, 19.63 20.03"
      }
    ],
    [
      "path",
      {
        "d": "M 8.63 5.36 C 17.61 16.75, 4.46 14.13, 16.67 20.18"
      }
    ],
    [
      "path",
      {
        "d": "M 6.11 6.73 C 15.42 19.28, 17.53 17.57, 15.62 21.49"
      }
    ],
    [
      "path",
      {
        "d": "M 7.93 9.64 C 18.95 13.91, 19.55 10.27, 17.56 19.66"
      }
    ]
  ]
};

export const UrgenteShame = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.36 9.85 C 8.47 5.93, 16.50 15.75, 14.07 19.25" />
      <path d="M 4.41 5.01 C 11.39 16.15, 4.17 7.85, 19.63 20.03" />
      <path d="M 8.63 5.36 C 17.61 16.75, 4.46 14.13, 16.67 20.18" />
      <path d="M 6.11 6.73 C 15.42 19.28, 17.53 17.57, 15.62 21.49" />
      <path d="M 7.93 9.64 C 18.95 13.91, 19.55 10.27, 17.56 19.66" />
      {children}
    </svg>
  );
});

export default UrgenteShame;
