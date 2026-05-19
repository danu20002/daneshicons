import React from 'react';

export const iconData = {
  "id": "StiloSun",
  "name": "StiloSun",
  "category": "TL",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.79 12.00 a 7.21 7.21 0 1 0 14.42 0 a 7.21 7.21 0 1 0 -14.42 0"
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
        "d": "M 18.71 12.00 L 20.71 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.14 16.31 L 18.67 17.60"
      }
    ],
    [
      "path",
      {
        "d": "M 13.16 18.61 L 13.51 20.58"
      }
    ],
    [
      "path",
      {
        "d": "M 8.65 17.81 L 7.65 19.54"
      }
    ],
    [
      "path",
      {
        "d": "M 5.70 14.29 L 3.82 14.98"
      }
    ],
    [
      "path",
      {
        "d": "M 5.70 9.71 L 3.82 9.02"
      }
    ],
    [
      "path",
      {
        "d": "M 8.65 6.19 L 7.65 4.46"
      }
    ],
    [
      "path",
      {
        "d": "M 13.16 5.39 L 13.51 3.42"
      }
    ],
    [
      "path",
      {
        "d": "M 17.14 7.69 L 18.67 6.40"
      }
    ]
  ]
};

export const StiloSun = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.79 12.00 a 7.21 7.21 0 1 0 14.42 0 a 7.21 7.21 0 1 0 -14.42 0" />
      <path d="M 6.91 12.00 a 5.09 5.09 0 1 1 10.17 0 a 5.09 5.09 0 1 1 -10.17 0" />
      <path d="M 18.71 12.00 L 20.71 12.00" />
      <path d="M 17.14 16.31 L 18.67 17.60" />
      <path d="M 13.16 18.61 L 13.51 20.58" />
      <path d="M 8.65 17.81 L 7.65 19.54" />
      <path d="M 5.70 14.29 L 3.82 14.98" />
      <path d="M 5.70 9.71 L 3.82 9.02" />
      <path d="M 8.65 6.19 L 7.65 4.46" />
      <path d="M 13.16 5.39 L 13.51 3.42" />
      <path d="M 17.14 7.69 L 18.67 6.40" />
      {children}
    </svg>
  );
});

export default StiloSun;
