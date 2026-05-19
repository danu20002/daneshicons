import React from 'react';

export const iconData = {
  "id": "IonoStrange",
  "name": "IonoStrange",
  "category": "PJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.81 2.91 C 19.83 4.64, 8.67 8.42, 15.91 21.84"
      }
    ],
    [
      "path",
      {
        "d": "M 3.36 3.15 C 5.73 10.82, 4.89 10.50, 14.95 17.61"
      }
    ],
    [
      "path",
      {
        "d": "M 4.83 4.33 C 9.28 18.10, 17.98 8.15, 16.75 21.42"
      }
    ],
    [
      "path",
      {
        "d": "M 6.11 8.21 C 15.13 12.54, 11.90 15.89, 19.17 21.17"
      }
    ],
    [
      "path",
      {
        "d": "M 5.24 8.99 C 18.58 11.04, 13.44 16.84, 17.71 18.63"
      }
    ]
  ]
};

export const IonoStrange = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.81 2.91 C 19.83 4.64, 8.67 8.42, 15.91 21.84" />
      <path d="M 3.36 3.15 C 5.73 10.82, 4.89 10.50, 14.95 17.61" />
      <path d="M 4.83 4.33 C 9.28 18.10, 17.98 8.15, 16.75 21.42" />
      <path d="M 6.11 8.21 C 15.13 12.54, 11.90 15.89, 19.17 21.17" />
      <path d="M 5.24 8.99 C 18.58 11.04, 13.44 16.84, 17.71 18.63" />
      {children}
    </svg>
  );
});

export default IonoStrange;
