import React from 'react';

export const iconData = {
  "id": "SusurroOrchestra",
  "name": "SusurroOrchestra",
  "category": "FD",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.97 7.55 C 17.04 9.57, 17.92 11.86, 18.55 15.19"
      }
    ],
    [
      "path",
      {
        "d": "M 8.75 3.59 C 18.80 4.98, 14.08 12.00, 21.74 18.06"
      }
    ],
    [
      "path",
      {
        "d": "M 2.21 7.49 C 8.52 12.04, 10.43 15.30, 19.40 14.39"
      }
    ],
    [
      "path",
      {
        "d": "M 4.27 8.44 C 4.85 19.61, 7.85 13.89, 15.75 15.00"
      }
    ],
    [
      "path",
      {
        "d": "M 4.25 4.42 C 4.70 12.18, 7.10 8.26, 17.07 20.41"
      }
    ]
  ]
};

export const SusurroOrchestra = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.97 7.55 C 17.04 9.57, 17.92 11.86, 18.55 15.19" />
      <path d="M 8.75 3.59 C 18.80 4.98, 14.08 12.00, 21.74 18.06" />
      <path d="M 2.21 7.49 C 8.52 12.04, 10.43 15.30, 19.40 14.39" />
      <path d="M 4.27 8.44 C 4.85 19.61, 7.85 13.89, 15.75 15.00" />
      <path d="M 4.25 4.42 C 4.70 12.18, 7.10 8.26, 17.07 20.41" />
      {children}
    </svg>
  );
});

export default SusurroOrchestra;
