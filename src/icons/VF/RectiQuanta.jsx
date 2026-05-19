import React from 'react';

export const iconData = {
  "id": "RectiQuanta",
  "name": "RectiQuanta",
  "category": "VF",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.98 3.57 C 11.04 11.89, 14.83 10.78, 21.74 17.09"
      }
    ],
    [
      "path",
      {
        "d": "M 7.81 5.84 C 16.30 9.66, 8.13 18.70, 20.79 16.71"
      }
    ],
    [
      "path",
      {
        "d": "M 9.15 6.91 C 18.62 9.57, 8.95 12.70, 21.14 21.52"
      }
    ],
    [
      "path",
      {
        "d": "M 9.29 9.93 C 14.68 12.90, 10.65 13.14, 14.48 15.86"
      }
    ],
    [
      "path",
      {
        "d": "M 3.65 3.19 C 6.91 16.24, 19.03 14.68, 16.43 15.47"
      }
    ]
  ]
};

export const RectiQuanta = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.98 3.57 C 11.04 11.89, 14.83 10.78, 21.74 17.09" />
      <path d="M 7.81 5.84 C 16.30 9.66, 8.13 18.70, 20.79 16.71" />
      <path d="M 9.15 6.91 C 18.62 9.57, 8.95 12.70, 21.14 21.52" />
      <path d="M 9.29 9.93 C 14.68 12.90, 10.65 13.14, 14.48 15.86" />
      <path d="M 3.65 3.19 C 6.91 16.24, 19.03 14.68, 16.43 15.47" />
      {children}
    </svg>
  );
});

export default RectiQuanta;
