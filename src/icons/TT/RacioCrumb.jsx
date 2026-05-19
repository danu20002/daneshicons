import React from 'react';

export const iconData = {
  "id": "RacioCrumb",
  "name": "RacioCrumb",
  "category": "TT",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.04 8.98 C 8.10 10.44, 10.13 10.30, 19.05 20.11"
      }
    ],
    [
      "path",
      {
        "d": "M 6.17 7.03 C 14.28 5.40, 12.50 6.75, 17.61 14.12"
      }
    ],
    [
      "path",
      {
        "d": "M 3.22 9.70 C 15.25 9.22, 12.02 16.33, 15.39 19.05"
      }
    ],
    [
      "path",
      {
        "d": "M 9.01 9.89 C 8.48 12.30, 16.16 8.45, 14.65 19.15"
      }
    ],
    [
      "path",
      {
        "d": "M 9.56 2.55 C 13.04 8.90, 7.67 13.62, 16.01 14.63"
      }
    ]
  ]
};

export const RacioCrumb = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.04 8.98 C 8.10 10.44, 10.13 10.30, 19.05 20.11" />
      <path d="M 6.17 7.03 C 14.28 5.40, 12.50 6.75, 17.61 14.12" />
      <path d="M 3.22 9.70 C 15.25 9.22, 12.02 16.33, 15.39 19.05" />
      <path d="M 9.01 9.89 C 8.48 12.30, 16.16 8.45, 14.65 19.15" />
      <path d="M 9.56 2.55 C 13.04 8.90, 7.67 13.62, 16.01 14.63" />
      {children}
    </svg>
  );
});

export default RacioCrumb;
