import React from 'react';

export const iconData = {
  "id": "PlexiPrecision",
  "name": "PlexiPrecision",
  "category": "VF",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.47 9.51 C 18.30 14.74, 4.91 17.75, 16.19 20.43"
      }
    ],
    [
      "path",
      {
        "d": "M 5.86 9.69 C 9.37 19.43, 14.25 10.23, 19.06 21.02"
      }
    ],
    [
      "path",
      {
        "d": "M 4.79 2.84 C 14.02 9.19, 13.99 5.89, 14.31 18.55"
      }
    ],
    [
      "path",
      {
        "d": "M 9.86 2.57 C 7.84 18.03, 4.60 18.04, 19.46 17.52"
      }
    ],
    [
      "path",
      {
        "d": "M 8.57 8.40 C 18.27 4.90, 18.01 16.53, 15.33 20.29"
      }
    ]
  ]
};

export const PlexiPrecision = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.47 9.51 C 18.30 14.74, 4.91 17.75, 16.19 20.43" />
      <path d="M 5.86 9.69 C 9.37 19.43, 14.25 10.23, 19.06 21.02" />
      <path d="M 4.79 2.84 C 14.02 9.19, 13.99 5.89, 14.31 18.55" />
      <path d="M 9.86 2.57 C 7.84 18.03, 4.60 18.04, 19.46 17.52" />
      <path d="M 8.57 8.40 C 18.27 4.90, 18.01 16.53, 15.33 20.29" />
      {children}
    </svg>
  );
});

export default PlexiPrecision;
