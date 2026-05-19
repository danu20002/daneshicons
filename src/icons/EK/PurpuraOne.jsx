import React from 'react';

export const iconData = {
  "id": "PurpuraOne",
  "name": "PurpuraOne",
  "category": "EK",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.90 9.46 C 4.29 7.44, 14.08 9.94, 14.37 19.54"
      }
    ],
    [
      "path",
      {
        "d": "M 2.57 7.28 C 12.75 10.46, 18.56 6.06, 16.25 14.86"
      }
    ],
    [
      "path",
      {
        "d": "M 7.99 2.13 C 11.99 19.21, 12.39 19.63, 19.32 20.59"
      }
    ],
    [
      "path",
      {
        "d": "M 2.00 4.26 C 15.57 5.82, 15.67 8.79, 20.36 21.74"
      }
    ]
  ]
};

export const PurpuraOne = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.90 9.46 C 4.29 7.44, 14.08 9.94, 14.37 19.54" />
      <path d="M 2.57 7.28 C 12.75 10.46, 18.56 6.06, 16.25 14.86" />
      <path d="M 7.99 2.13 C 11.99 19.21, 12.39 19.63, 19.32 20.59" />
      <path d="M 2.00 4.26 C 15.57 5.82, 15.67 8.79, 20.36 21.74" />
      {children}
    </svg>
  );
});

export default PurpuraOne;
