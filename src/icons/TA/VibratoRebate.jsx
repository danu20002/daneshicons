import React from 'react';

export const iconData = {
  "id": "VibratoRebate",
  "name": "VibratoRebate",
  "category": "TA",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.97 6.45 C 11.87 5.91, 16.46 13.16, 14.34 16.67"
      }
    ],
    [
      "path",
      {
        "d": "M 9.61 6.17 C 18.71 16.36, 4.63 14.16, 15.83 15.14"
      }
    ],
    [
      "path",
      {
        "d": "M 4.78 7.41 C 19.67 18.29, 9.13 19.10, 18.21 15.76"
      }
    ],
    [
      "path",
      {
        "d": "M 7.57 3.59 C 16.56 15.76, 5.18 11.92, 20.55 16.33"
      }
    ],
    [
      "path",
      {
        "d": "M 7.32 6.56 C 7.03 15.19, 7.18 4.30, 14.20 15.22"
      }
    ],
    [
      "path",
      {
        "d": "M 9.42 9.08 C 18.40 5.53, 15.39 14.78, 20.07 15.34"
      }
    ]
  ]
};

export const VibratoRebate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.97 6.45 C 11.87 5.91, 16.46 13.16, 14.34 16.67" />
      <path d="M 9.61 6.17 C 18.71 16.36, 4.63 14.16, 15.83 15.14" />
      <path d="M 4.78 7.41 C 19.67 18.29, 9.13 19.10, 18.21 15.76" />
      <path d="M 7.57 3.59 C 16.56 15.76, 5.18 11.92, 20.55 16.33" />
      <path d="M 7.32 6.56 C 7.03 15.19, 7.18 4.30, 14.20 15.22" />
      <path d="M 9.42 9.08 C 18.40 5.53, 15.39 14.78, 20.07 15.34" />
      {children}
    </svg>
  );
});

export default VibratoRebate;
