import React from 'react';

export const iconData = {
  "id": "TomoStorage",
  "name": "TomoStorage",
  "category": "ZP",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.23 2.65 C 9.47 14.90, 6.65 8.83, 17.73 21.32"
      }
    ],
    [
      "path",
      {
        "d": "M 9.25 4.94 C 10.57 19.06, 17.47 19.44, 19.33 17.56"
      }
    ],
    [
      "path",
      {
        "d": "M 2.88 8.13 C 17.55 13.95, 15.96 12.89, 19.29 18.49"
      }
    ],
    [
      "path",
      {
        "d": "M 3.13 4.61 C 4.66 17.76, 15.22 15.28, 19.07 17.12"
      }
    ],
    [
      "path",
      {
        "d": "M 3.91 4.03 C 18.57 10.95, 5.37 11.40, 18.96 19.02"
      }
    ],
    [
      "path",
      {
        "d": "M 7.71 2.68 C 18.64 12.71, 19.66 7.82, 20.66 20.30"
      }
    ]
  ]
};

export const TomoStorage = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.23 2.65 C 9.47 14.90, 6.65 8.83, 17.73 21.32" />
      <path d="M 9.25 4.94 C 10.57 19.06, 17.47 19.44, 19.33 17.56" />
      <path d="M 2.88 8.13 C 17.55 13.95, 15.96 12.89, 19.29 18.49" />
      <path d="M 3.13 4.61 C 4.66 17.76, 15.22 15.28, 19.07 17.12" />
      <path d="M 3.91 4.03 C 18.57 10.95, 5.37 11.40, 18.96 19.02" />
      <path d="M 7.71 2.68 C 18.64 12.71, 19.66 7.82, 20.66 20.30" />
      {children}
    </svg>
  );
});

export default TomoStorage;
