import React from 'react';

export const iconData = {
  "id": "QuebraRudder",
  "name": "QuebraRudder",
  "category": "UM",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.12 6.13 C 16.02 17.17, 16.72 10.49, 19.27 14.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.07 2.51 C 18.27 16.91, 15.71 9.72, 14.97 18.92"
      }
    ],
    [
      "path",
      {
        "d": "M 7.26 4.46 C 5.68 11.62, 18.37 5.05, 20.87 16.86"
      }
    ],
    [
      "path",
      {
        "d": "M 6.72 9.77 C 13.80 19.44, 18.19 10.19, 17.14 21.86"
      }
    ]
  ]
};

export const QuebraRudder = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.12 6.13 C 16.02 17.17, 16.72 10.49, 19.27 14.00" />
      <path d="M 6.07 2.51 C 18.27 16.91, 15.71 9.72, 14.97 18.92" />
      <path d="M 7.26 4.46 C 5.68 11.62, 18.37 5.05, 20.87 16.86" />
      <path d="M 6.72 9.77 C 13.80 19.44, 18.19 10.19, 17.14 21.86" />
      {children}
    </svg>
  );
});

export default QuebraRudder;
