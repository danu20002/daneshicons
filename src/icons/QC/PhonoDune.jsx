import React from 'react';

export const iconData = {
  "id": "PhonoDune",
  "name": "PhonoDune",
  "category": "QC",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.43 5.53 C 15.55 13.91, 4.77 19.13, 19.16 15.18"
      }
    ],
    [
      "path",
      {
        "d": "M 8.64 7.79 C 5.87 14.60, 14.46 12.19, 14.42 17.05"
      }
    ],
    [
      "path",
      {
        "d": "M 8.48 8.79 C 6.19 19.26, 4.12 5.41, 14.97 16.59"
      }
    ],
    [
      "path",
      {
        "d": "M 4.20 7.34 C 9.26 9.76, 14.52 5.72, 19.97 14.55"
      }
    ]
  ]
};

export const PhonoDune = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.43 5.53 C 15.55 13.91, 4.77 19.13, 19.16 15.18" />
      <path d="M 8.64 7.79 C 5.87 14.60, 14.46 12.19, 14.42 17.05" />
      <path d="M 8.48 8.79 C 6.19 19.26, 4.12 5.41, 14.97 16.59" />
      <path d="M 4.20 7.34 C 9.26 9.76, 14.52 5.72, 19.97 14.55" />
      {children}
    </svg>
  );
});

export default PhonoDune;
