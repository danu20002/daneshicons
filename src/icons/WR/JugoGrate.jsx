import React from 'react';

export const iconData = {
  "id": "JugoGrate",
  "name": "JugoGrate",
  "category": "WR",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.51 3.91 C 14.97 16.72, 5.96 11.29, 20.43 20.83"
      }
    ],
    [
      "path",
      {
        "d": "M 6.19 9.79 C 4.98 16.74, 4.94 17.22, 16.61 20.65"
      }
    ],
    [
      "path",
      {
        "d": "M 5.81 9.53 C 15.85 15.67, 19.15 14.43, 16.67 14.29"
      }
    ],
    [
      "path",
      {
        "d": "M 6.39 8.85 C 9.28 14.93, 15.89 11.91, 20.94 16.99"
      }
    ],
    [
      "path",
      {
        "d": "M 3.74 4.94 C 14.07 18.28, 9.22 13.95, 19.49 18.45"
      }
    ],
    [
      "path",
      {
        "d": "M 9.70 2.83 C 5.46 9.50, 18.44 7.01, 16.66 14.83"
      }
    ]
  ]
};

export const JugoGrate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.51 3.91 C 14.97 16.72, 5.96 11.29, 20.43 20.83" />
      <path d="M 6.19 9.79 C 4.98 16.74, 4.94 17.22, 16.61 20.65" />
      <path d="M 5.81 9.53 C 15.85 15.67, 19.15 14.43, 16.67 14.29" />
      <path d="M 6.39 8.85 C 9.28 14.93, 15.89 11.91, 20.94 16.99" />
      <path d="M 3.74 4.94 C 14.07 18.28, 9.22 13.95, 19.49 18.45" />
      <path d="M 9.70 2.83 C 5.46 9.50, 18.44 7.01, 16.66 14.83" />
      {children}
    </svg>
  );
});

export default JugoGrate;
