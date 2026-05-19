import React from 'react';

export const iconData = {
  "id": "TrajectoMicrobe",
  "name": "TrajectoMicrobe",
  "category": "PJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.69 7.12 C 16.12 9.83, 8.65 17.00, 20.01 16.23"
      }
    ],
    [
      "path",
      {
        "d": "M 9.36 6.94 C 4.90 14.43, 8.79 14.99, 18.52 18.76"
      }
    ],
    [
      "path",
      {
        "d": "M 7.50 8.38 C 10.08 16.02, 12.46 8.82, 17.80 19.26"
      }
    ],
    [
      "path",
      {
        "d": "M 4.51 5.94 C 4.38 5.49, 5.16 9.48, 16.75 14.86"
      }
    ]
  ]
};

export const TrajectoMicrobe = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.69 7.12 C 16.12 9.83, 8.65 17.00, 20.01 16.23" />
      <path d="M 9.36 6.94 C 4.90 14.43, 8.79 14.99, 18.52 18.76" />
      <path d="M 7.50 8.38 C 10.08 16.02, 12.46 8.82, 17.80 19.26" />
      <path d="M 4.51 5.94 C 4.38 5.49, 5.16 9.48, 16.75 14.86" />
      {children}
    </svg>
  );
});

export default TrajectoMicrobe;
