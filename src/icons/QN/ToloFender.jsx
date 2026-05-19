import React from 'react';

export const iconData = {
  "id": "ToloFender",
  "name": "ToloFender",
  "category": "QN",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.81 12.00 a 8.19 8.19 0 1 0 16.38 0 a 8.19 8.19 0 1 0 -16.38 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.03 12.00 a 5.97 5.97 0 1 1 11.94 0 a 5.97 5.97 0 1 1 -11.94 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.69 12.00 L 21.69 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.89 16.94 L 19.42 18.23"
      }
    ],
    [
      "path",
      {
        "d": "M 13.34 19.57 L 13.68 21.54"
      }
    ],
    [
      "path",
      {
        "d": "M 8.15 18.66 L 7.15 20.39"
      }
    ],
    [
      "path",
      {
        "d": "M 4.77 14.63 L 2.89 15.31"
      }
    ],
    [
      "path",
      {
        "d": "M 4.77 9.37 L 2.89 8.69"
      }
    ],
    [
      "path",
      {
        "d": "M 8.15 5.34 L 7.15 3.61"
      }
    ],
    [
      "path",
      {
        "d": "M 13.34 4.43 L 13.68 2.46"
      }
    ],
    [
      "path",
      {
        "d": "M 17.89 7.06 L 19.42 5.77"
      }
    ]
  ]
};

export const ToloFender = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.81 12.00 a 8.19 8.19 0 1 0 16.38 0 a 8.19 8.19 0 1 0 -16.38 0" />
      <path d="M 6.03 12.00 a 5.97 5.97 0 1 1 11.94 0 a 5.97 5.97 0 1 1 -11.94 0" />
      <path d="M 19.69 12.00 L 21.69 12.00" />
      <path d="M 17.89 16.94 L 19.42 18.23" />
      <path d="M 13.34 19.57 L 13.68 21.54" />
      <path d="M 8.15 18.66 L 7.15 20.39" />
      <path d="M 4.77 14.63 L 2.89 15.31" />
      <path d="M 4.77 9.37 L 2.89 8.69" />
      <path d="M 8.15 5.34 L 7.15 3.61" />
      <path d="M 13.34 4.43 L 13.68 2.46" />
      <path d="M 17.89 7.06 L 19.42 5.77" />
      {children}
    </svg>
  );
});

export default ToloFender;
