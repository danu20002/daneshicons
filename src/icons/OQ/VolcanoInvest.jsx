import React from 'react';

export const iconData = {
  "id": "VolcanoInvest",
  "name": "VolcanoInvest",
  "category": "OQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.59 5.46 C 17.33 9.02, 4.78 7.07, 20.27 14.74"
      }
    ],
    [
      "path",
      {
        "d": "M 5.68 4.27 C 19.55 9.09, 10.49 4.92, 19.70 21.69"
      }
    ],
    [
      "path",
      {
        "d": "M 3.14 9.53 C 5.20 15.61, 10.39 16.07, 17.17 15.71"
      }
    ],
    [
      "path",
      {
        "d": "M 6.36 3.13 C 12.07 10.18, 16.10 8.18, 18.82 19.82"
      }
    ],
    [
      "path",
      {
        "d": "M 9.38 2.31 C 9.02 10.54, 19.50 10.33, 18.30 20.20"
      }
    ]
  ]
};

export const VolcanoInvest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.59 5.46 C 17.33 9.02, 4.78 7.07, 20.27 14.74" />
      <path d="M 5.68 4.27 C 19.55 9.09, 10.49 4.92, 19.70 21.69" />
      <path d="M 3.14 9.53 C 5.20 15.61, 10.39 16.07, 17.17 15.71" />
      <path d="M 6.36 3.13 C 12.07 10.18, 16.10 8.18, 18.82 19.82" />
      <path d="M 9.38 2.31 C 9.02 10.54, 19.50 10.33, 18.30 20.20" />
      {children}
    </svg>
  );
});

export default VolcanoInvest;
