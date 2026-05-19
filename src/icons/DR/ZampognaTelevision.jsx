import React from 'react';

export const iconData = {
  "id": "ZampognaTelevision",
  "name": "ZampognaTelevision",
  "category": "DR",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.48 4.37 C 11.06 9.46, 17.84 13.03, 19.94 19.43"
      }
    ],
    [
      "path",
      {
        "d": "M 3.61 3.13 C 9.21 5.77, 17.16 6.27, 14.13 15.21"
      }
    ],
    [
      "path",
      {
        "d": "M 9.59 7.46 C 13.42 10.09, 6.87 17.54, 20.05 19.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.46 3.45 C 13.22 5.15, 6.99 10.45, 15.83 16.79"
      }
    ],
    [
      "path",
      {
        "d": "M 5.39 9.92 C 13.89 8.48, 18.82 8.18, 16.43 21.79"
      }
    ]
  ]
};

export const ZampognaTelevision = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.48 4.37 C 11.06 9.46, 17.84 13.03, 19.94 19.43" />
      <path d="M 3.61 3.13 C 9.21 5.77, 17.16 6.27, 14.13 15.21" />
      <path d="M 9.59 7.46 C 13.42 10.09, 6.87 17.54, 20.05 19.00" />
      <path d="M 5.46 3.45 C 13.22 5.15, 6.99 10.45, 15.83 16.79" />
      <path d="M 5.39 9.92 C 13.89 8.48, 18.82 8.18, 16.43 21.79" />
      {children}
    </svg>
  );
});

export default ZampognaTelevision;
