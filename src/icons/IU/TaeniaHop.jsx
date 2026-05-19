import React from 'react';

export const iconData = {
  "id": "TaeniaHop",
  "name": "TaeniaHop",
  "category": "IU",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.06 4.18 C 9.63 5.91, 11.23 19.86, 19.02 20.35"
      }
    ],
    [
      "path",
      {
        "d": "M 3.41 8.19 C 16.46 6.18, 5.53 8.14, 20.36 19.19"
      }
    ],
    [
      "path",
      {
        "d": "M 9.12 8.70 C 4.18 19.49, 19.45 13.44, 19.79 15.18"
      }
    ],
    [
      "path",
      {
        "d": "M 7.36 5.42 C 15.62 9.71, 17.73 16.14, 15.34 14.87"
      }
    ],
    [
      "path",
      {
        "d": "M 6.67 2.82 C 9.63 10.23, 12.93 11.73, 21.81 14.14"
      }
    ]
  ]
};

export const TaeniaHop = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.06 4.18 C 9.63 5.91, 11.23 19.86, 19.02 20.35" />
      <path d="M 3.41 8.19 C 16.46 6.18, 5.53 8.14, 20.36 19.19" />
      <path d="M 9.12 8.70 C 4.18 19.49, 19.45 13.44, 19.79 15.18" />
      <path d="M 7.36 5.42 C 15.62 9.71, 17.73 16.14, 15.34 14.87" />
      <path d="M 6.67 2.82 C 9.63 10.23, 12.93 11.73, 21.81 14.14" />
      {children}
    </svg>
  );
});

export default TaeniaHop;
