import React from 'react';

export const iconData = {
  "id": "ToccoExplore",
  "name": "ToccoExplore",
  "category": "VY",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.20 2.75 C 4.63 10.42, 10.35 6.46, 17.68 18.79"
      }
    ],
    [
      "path",
      {
        "d": "M 9.06 6.61 C 12.34 17.63, 9.35 14.81, 18.21 20.85"
      }
    ],
    [
      "path",
      {
        "d": "M 2.65 7.09 C 12.45 11.14, 18.54 19.77, 18.65 17.76"
      }
    ],
    [
      "path",
      {
        "d": "M 8.40 3.87 C 18.66 7.55, 6.23 12.63, 14.05 20.80"
      }
    ],
    [
      "path",
      {
        "d": "M 5.29 6.28 C 9.54 15.52, 16.02 15.29, 16.71 19.22"
      }
    ]
  ]
};

export const ToccoExplore = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.20 2.75 C 4.63 10.42, 10.35 6.46, 17.68 18.79" />
      <path d="M 9.06 6.61 C 12.34 17.63, 9.35 14.81, 18.21 20.85" />
      <path d="M 2.65 7.09 C 12.45 11.14, 18.54 19.77, 18.65 17.76" />
      <path d="M 8.40 3.87 C 18.66 7.55, 6.23 12.63, 14.05 20.80" />
      <path d="M 5.29 6.28 C 9.54 15.52, 16.02 15.29, 16.71 19.22" />
      {children}
    </svg>
  );
});

export default ToccoExplore;
