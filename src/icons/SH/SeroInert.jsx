import React from 'react';

export const iconData = {
  "id": "SeroInert",
  "name": "SeroInert",
  "category": "SH",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.66 9.48 C 6.97 8.25, 16.49 18.46, 21.18 20.98"
      }
    ],
    [
      "path",
      {
        "d": "M 6.61 4.82 C 18.69 5.74, 5.41 13.82, 21.22 14.94"
      }
    ],
    [
      "path",
      {
        "d": "M 9.97 7.59 C 6.58 8.73, 7.31 5.73, 16.44 14.69"
      }
    ],
    [
      "path",
      {
        "d": "M 9.57 6.89 C 9.36 12.01, 16.59 16.79, 14.34 20.17"
      }
    ],
    [
      "path",
      {
        "d": "M 3.92 3.52 C 6.81 4.16, 13.39 12.07, 15.68 16.41"
      }
    ]
  ]
};

export const SeroInert = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.66 9.48 C 6.97 8.25, 16.49 18.46, 21.18 20.98" />
      <path d="M 6.61 4.82 C 18.69 5.74, 5.41 13.82, 21.22 14.94" />
      <path d="M 9.97 7.59 C 6.58 8.73, 7.31 5.73, 16.44 14.69" />
      <path d="M 9.57 6.89 C 9.36 12.01, 16.59 16.79, 14.34 20.17" />
      <path d="M 3.92 3.52 C 6.81 4.16, 13.39 12.07, 15.68 16.41" />
      {children}
    </svg>
  );
});

export default SeroInert;
