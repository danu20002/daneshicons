import React from 'react';

export const iconData = {
  "id": "MetaTask",
  "name": "MetaTask",
  "category": "AA",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.55 9.58 C 18.42 11.08, 12.87 19.86, 16.08 17.45"
      }
    ],
    [
      "path",
      {
        "d": "M 6.99 6.81 C 10.05 5.51, 16.21 13.64, 18.21 18.73"
      }
    ],
    [
      "path",
      {
        "d": "M 8.38 7.86 C 8.86 9.70, 19.60 13.42, 16.81 17.10"
      }
    ],
    [
      "path",
      {
        "d": "M 7.47 6.72 C 5.02 7.24, 10.01 14.69, 18.57 20.65"
      }
    ]
  ]
};

export const MetaTask = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.55 9.58 C 18.42 11.08, 12.87 19.86, 16.08 17.45" />
      <path d="M 6.99 6.81 C 10.05 5.51, 16.21 13.64, 18.21 18.73" />
      <path d="M 8.38 7.86 C 8.86 9.70, 19.60 13.42, 16.81 17.10" />
      <path d="M 7.47 6.72 C 5.02 7.24, 10.01 14.69, 18.57 20.65" />
      {children}
    </svg>
  );
});

export default MetaTask;
