import React from 'react';

export const iconData = {
  "id": "TenuKale",
  "name": "TenuKale",
  "category": "HM",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.10 12.00 Q 16.67 13.25 19.02 16.05"
      }
    ],
    [
      "path",
      {
        "d": "M 19.02 16.05 Q 15.42 15.42 16.05 19.02"
      }
    ],
    [
      "path",
      {
        "d": "M 16.05 19.02 Q 13.25 16.67 12.00 20.10"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.10 Q 10.75 16.67 7.95 19.02"
      }
    ],
    [
      "path",
      {
        "d": "M 7.95 19.02 Q 8.58 15.42 4.98 16.05"
      }
    ],
    [
      "path",
      {
        "d": "M 4.98 16.05 Q 7.33 13.25 3.90 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.90 12.00 Q 7.33 10.75 4.98 7.95"
      }
    ],
    [
      "path",
      {
        "d": "M 4.98 7.95 Q 8.58 8.58 7.95 4.98"
      }
    ],
    [
      "path",
      {
        "d": "M 7.95 4.98 Q 10.75 7.33 12.00 3.90"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.90 Q 13.25 7.33 16.05 4.98"
      }
    ],
    [
      "path",
      {
        "d": "M 16.05 4.98 Q 15.42 8.58 19.02 7.95"
      }
    ],
    [
      "path",
      {
        "d": "M 19.02 7.95 Q 16.67 10.75 20.10 12.00"
      }
    ]
  ]
};

export const TenuKale = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.10 12.00 Q 16.67 13.25 19.02 16.05" />
      <path d="M 19.02 16.05 Q 15.42 15.42 16.05 19.02" />
      <path d="M 16.05 19.02 Q 13.25 16.67 12.00 20.10" />
      <path d="M 12.00 20.10 Q 10.75 16.67 7.95 19.02" />
      <path d="M 7.95 19.02 Q 8.58 15.42 4.98 16.05" />
      <path d="M 4.98 16.05 Q 7.33 13.25 3.90 12.00" />
      <path d="M 3.90 12.00 Q 7.33 10.75 4.98 7.95" />
      <path d="M 4.98 7.95 Q 8.58 8.58 7.95 4.98" />
      <path d="M 7.95 4.98 Q 10.75 7.33 12.00 3.90" />
      <path d="M 12.00 3.90 Q 13.25 7.33 16.05 4.98" />
      <path d="M 16.05 4.98 Q 15.42 8.58 19.02 7.95" />
      <path d="M 19.02 7.95 Q 16.67 10.75 20.10 12.00" />
      {children}
    </svg>
  );
});

export default TenuKale;
