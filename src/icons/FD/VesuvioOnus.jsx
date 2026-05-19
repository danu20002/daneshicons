import React from 'react';

export const iconData = {
  "id": "VesuvioOnus",
  "name": "VesuvioOnus",
  "category": "FD",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.54 5.59 C 15.80 12.74, 9.48 16.62, 14.62 19.31"
      }
    ],
    [
      "path",
      {
        "d": "M 8.20 9.20 C 9.87 12.93, 16.58 10.36, 20.39 19.03"
      }
    ],
    [
      "path",
      {
        "d": "M 9.47 7.60 C 11.40 12.02, 18.54 10.01, 20.61 17.59"
      }
    ],
    [
      "path",
      {
        "d": "M 3.74 5.52 C 10.55 14.39, 10.58 11.81, 20.91 18.27"
      }
    ],
    [
      "path",
      {
        "d": "M 2.83 4.51 C 5.47 19.43, 16.24 8.86, 19.33 21.15"
      }
    ],
    [
      "path",
      {
        "d": "M 7.05 8.99 C 10.10 19.07, 17.83 7.06, 21.44 18.63"
      }
    ]
  ]
};

export const VesuvioOnus = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.54 5.59 C 15.80 12.74, 9.48 16.62, 14.62 19.31" />
      <path d="M 8.20 9.20 C 9.87 12.93, 16.58 10.36, 20.39 19.03" />
      <path d="M 9.47 7.60 C 11.40 12.02, 18.54 10.01, 20.61 17.59" />
      <path d="M 3.74 5.52 C 10.55 14.39, 10.58 11.81, 20.91 18.27" />
      <path d="M 2.83 4.51 C 5.47 19.43, 16.24 8.86, 19.33 21.15" />
      <path d="M 7.05 8.99 C 10.10 19.07, 17.83 7.06, 21.44 18.63" />
      {children}
    </svg>
  );
});

export default VesuvioOnus;
