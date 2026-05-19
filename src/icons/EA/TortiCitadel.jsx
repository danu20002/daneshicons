import React from 'react';

export const iconData = {
  "id": "TortiCitadel",
  "name": "TortiCitadel",
  "category": "EA",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.26 12.00 a 9.74 9.74 0 1 0 19.47 0 a 9.74 9.74 0 1 0 -19.47 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.82 8.75 a 9.18 2.75354497665244 0 1 0 18.36 0 a 9.18 2.75354497665244 0 1 0 -18.36 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.82 15.25 a 9.18 2.75354497665244 0 1 0 18.36 0 a 9.18 2.75354497665244 0 1 0 -18.36 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.87 3.57 A 2 2 0 0 0 16.87 20.43"
      }
    ],
    [
      "path",
      {
        "d": "M 16.87 3.57 A 2 2 0 0 1 16.87 20.43"
      }
    ],
    [
      "path",
      {
        "d": "M 7.13 3.57 A 2 2 0 0 0 7.13 20.43"
      }
    ],
    [
      "path",
      {
        "d": "M 7.13 3.57 A 2 2 0 0 1 7.13 20.43"
      }
    ]
  ]
};

export const TortiCitadel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.26 12.00 a 9.74 9.74 0 1 0 19.47 0 a 9.74 9.74 0 1 0 -19.47 0" />
      <path d="M 2.82 8.75 a 9.18 2.75354497665244 0 1 0 18.36 0 a 9.18 2.75354497665244 0 1 0 -18.36 0" />
      <path d="M 2.82 15.25 a 9.18 2.75354497665244 0 1 0 18.36 0 a 9.18 2.75354497665244 0 1 0 -18.36 0" />
      <path d="M 16.87 3.57 A 2 2 0 0 0 16.87 20.43" />
      <path d="M 16.87 3.57 A 2 2 0 0 1 16.87 20.43" />
      <path d="M 7.13 3.57 A 2 2 0 0 0 7.13 20.43" />
      <path d="M 7.13 3.57 A 2 2 0 0 1 7.13 20.43" />
      {children}
    </svg>
  );
});

export default TortiCitadel;
