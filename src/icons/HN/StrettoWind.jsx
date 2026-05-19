import React from 'react';

export const iconData = {
  "id": "StrettoWind",
  "name": "StrettoWind",
  "category": "HN",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.12 7.06 C 19.83 13.04, 2.93 19.82, 21.62 16.80"
      }
    ],
    [
      "path",
      {
        "d": "M 3.31 21.05 Q 13.78 5.00 20.07 7.80"
      }
    ],
    [
      "path",
      {
        "d": "M 3.95 10.30 C 16.25 7.47, 7.60 15.14, 17.03 11.94"
      }
    ],
    [
      "path",
      {
        "d": "M 10.42 9.67 C 3.37 15.94, 7.55 11.66, 7.66 12.83"
      }
    ],
    [
      "path",
      {
        "d": "M 9.07 11.67 L 13.34 18.75 L 12.65 18.03 L 10.18 17.80 L 11.11 4.23 L 9.49 18.89 L 20.70 6.39 L 14.76 13.93"
      }
    ],
    [
      "path",
      {
        "d": "M 15.33 13.19 Q 12.73 8.38 17.31 18.57"
      }
    ]
  ]
};

export const StrettoWind = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.12 7.06 C 19.83 13.04, 2.93 19.82, 21.62 16.80" />
      <path d="M 3.31 21.05 Q 13.78 5.00 20.07 7.80" />
      <path d="M 3.95 10.30 C 16.25 7.47, 7.60 15.14, 17.03 11.94" />
      <path d="M 10.42 9.67 C 3.37 15.94, 7.55 11.66, 7.66 12.83" />
      <path d="M 9.07 11.67 L 13.34 18.75 L 12.65 18.03 L 10.18 17.80 L 11.11 4.23 L 9.49 18.89 L 20.70 6.39 L 14.76 13.93" />
      <path d="M 15.33 13.19 Q 12.73 8.38 17.31 18.57" />
      {children}
    </svg>
  );
});

export default StrettoWind;
