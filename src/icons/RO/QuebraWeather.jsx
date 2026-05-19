import React from 'react';

export const iconData = {
  "id": "QuebraWeather",
  "name": "QuebraWeather",
  "category": "RO",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.16 4.68 C 6.13 11.10, 9.39 12.55, 17.17 14.98"
      }
    ],
    [
      "path",
      {
        "d": "M 5.86 8.25 C 10.34 9.69, 7.34 7.77, 17.17 14.15"
      }
    ],
    [
      "path",
      {
        "d": "M 6.32 2.42 C 7.39 11.24, 13.36 9.10, 19.44 19.05"
      }
    ],
    [
      "path",
      {
        "d": "M 2.89 9.37 C 10.40 7.00, 16.23 10.91, 15.92 21.82"
      }
    ]
  ]
};

export const QuebraWeather = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.16 4.68 C 6.13 11.10, 9.39 12.55, 17.17 14.98" />
      <path d="M 5.86 8.25 C 10.34 9.69, 7.34 7.77, 17.17 14.15" />
      <path d="M 6.32 2.42 C 7.39 11.24, 13.36 9.10, 19.44 19.05" />
      <path d="M 2.89 9.37 C 10.40 7.00, 16.23 10.91, 15.92 21.82" />
      {children}
    </svg>
  );
});

export default QuebraWeather;
