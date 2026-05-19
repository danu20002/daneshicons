import React from 'react';

export const iconData = {
  "id": "JugoInform",
  "name": "JugoInform",
  "category": "DR",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.78 3.51 C 9.11 9.19, 6.88 10.10, 20.64 20.67"
      }
    ],
    [
      "path",
      {
        "d": "M 2.04 8.62 C 19.30 4.42, 13.26 16.26, 20.88 20.38"
      }
    ],
    [
      "path",
      {
        "d": "M 2.84 4.20 C 9.21 13.70, 4.01 18.96, 14.99 20.05"
      }
    ],
    [
      "path",
      {
        "d": "M 9.35 6.76 C 15.14 4.05, 10.67 5.63, 17.13 19.93"
      }
    ],
    [
      "path",
      {
        "d": "M 9.09 3.17 C 16.31 13.91, 6.68 13.86, 17.95 15.10"
      }
    ]
  ]
};

export const JugoInform = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.78 3.51 C 9.11 9.19, 6.88 10.10, 20.64 20.67" />
      <path d="M 2.04 8.62 C 19.30 4.42, 13.26 16.26, 20.88 20.38" />
      <path d="M 2.84 4.20 C 9.21 13.70, 4.01 18.96, 14.99 20.05" />
      <path d="M 9.35 6.76 C 15.14 4.05, 10.67 5.63, 17.13 19.93" />
      <path d="M 9.09 3.17 C 16.31 13.91, 6.68 13.86, 17.95 15.10" />
      {children}
    </svg>
  );
});

export default JugoInform;
