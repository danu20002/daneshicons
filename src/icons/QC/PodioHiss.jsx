import React from 'react';

export const iconData = {
  "id": "PodioHiss",
  "name": "PodioHiss",
  "category": "QC",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.75 9.62 C 19.82 18.96, 13.91 7.31, 14.18 15.78"
      }
    ],
    [
      "path",
      {
        "d": "M 2.34 2.54 C 12.24 15.64, 14.93 8.97, 17.82 16.14"
      }
    ],
    [
      "path",
      {
        "d": "M 8.54 8.60 C 19.34 5.99, 14.99 16.64, 15.25 14.89"
      }
    ],
    [
      "path",
      {
        "d": "M 4.89 2.17 C 4.51 15.11, 18.59 11.75, 14.48 14.42"
      }
    ]
  ]
};

export const PodioHiss = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.75 9.62 C 19.82 18.96, 13.91 7.31, 14.18 15.78" />
      <path d="M 2.34 2.54 C 12.24 15.64, 14.93 8.97, 17.82 16.14" />
      <path d="M 8.54 8.60 C 19.34 5.99, 14.99 16.64, 15.25 14.89" />
      <path d="M 4.89 2.17 C 4.51 15.11, 18.59 11.75, 14.48 14.42" />
      {children}
    </svg>
  );
});

export default PodioHiss;
