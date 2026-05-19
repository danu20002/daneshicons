import React from 'react';

export const iconData = {
  "id": "VitaGrate",
  "name": "VitaGrate",
  "category": "AL",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.06 12.00 a 7.94 7.94 0 1 0 15.89 0 a 7.94 7.94 0 1 0 -15.89 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.91 12.00 a 5.09 5.09 0 1 1 10.17 0 a 5.09 5.09 0 1 1 -10.17 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.44 12.00 L 21.44 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.70 16.78 L 19.23 18.07"
      }
    ],
    [
      "path",
      {
        "d": "M 13.29 19.33 L 13.64 21.30"
      }
    ],
    [
      "path",
      {
        "d": "M 8.28 18.45 L 7.28 20.18"
      }
    ],
    [
      "path",
      {
        "d": "M 5.01 14.55 L 3.13 15.23"
      }
    ],
    [
      "path",
      {
        "d": "M 5.01 9.45 L 3.13 8.77"
      }
    ],
    [
      "path",
      {
        "d": "M 8.28 5.55 L 7.28 3.82"
      }
    ],
    [
      "path",
      {
        "d": "M 13.29 4.67 L 13.64 2.70"
      }
    ],
    [
      "path",
      {
        "d": "M 17.70 7.22 L 19.23 5.93"
      }
    ]
  ]
};

export const VitaGrate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.06 12.00 a 7.94 7.94 0 1 0 15.89 0 a 7.94 7.94 0 1 0 -15.89 0" />
      <path d="M 6.91 12.00 a 5.09 5.09 0 1 1 10.17 0 a 5.09 5.09 0 1 1 -10.17 0" />
      <path d="M 19.44 12.00 L 21.44 12.00" />
      <path d="M 17.70 16.78 L 19.23 18.07" />
      <path d="M 13.29 19.33 L 13.64 21.30" />
      <path d="M 8.28 18.45 L 7.28 20.18" />
      <path d="M 5.01 14.55 L 3.13 15.23" />
      <path d="M 5.01 9.45 L 3.13 8.77" />
      <path d="M 8.28 5.55 L 7.28 3.82" />
      <path d="M 13.29 4.67 L 13.64 2.70" />
      <path d="M 17.70 7.22 L 19.23 5.93" />
      {children}
    </svg>
  );
});

export default VitaGrate;
