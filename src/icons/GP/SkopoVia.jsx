import React from 'react';

export const iconData = {
  "id": "SkopoVia",
  "name": "SkopoVia",
  "category": "GP",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.65 2.97 C 16.50 12.58, 17.06 17.11, 19.27 19.02"
      }
    ],
    [
      "path",
      {
        "d": "M 9.36 6.24 C 9.26 7.92, 6.75 16.51, 18.42 16.45"
      }
    ],
    [
      "path",
      {
        "d": "M 6.56 9.47 C 16.04 17.27, 7.29 8.66, 20.42 14.17"
      }
    ],
    [
      "path",
      {
        "d": "M 6.33 2.26 C 6.05 15.13, 14.53 12.06, 15.73 14.66"
      }
    ],
    [
      "path",
      {
        "d": "M 7.83 3.02 C 8.26 10.17, 16.52 16.83, 15.05 18.91"
      }
    ]
  ]
};

export const SkopoVia = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.65 2.97 C 16.50 12.58, 17.06 17.11, 19.27 19.02" />
      <path d="M 9.36 6.24 C 9.26 7.92, 6.75 16.51, 18.42 16.45" />
      <path d="M 6.56 9.47 C 16.04 17.27, 7.29 8.66, 20.42 14.17" />
      <path d="M 6.33 2.26 C 6.05 15.13, 14.53 12.06, 15.73 14.66" />
      <path d="M 7.83 3.02 C 8.26 10.17, 16.52 16.83, 15.05 18.91" />
      {children}
    </svg>
  );
});

export default SkopoVia;
