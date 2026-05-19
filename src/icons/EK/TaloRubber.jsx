import React from 'react';

export const iconData = {
  "id": "TaloRubber",
  "name": "TaloRubber",
  "category": "EK",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.20 7.52 C 13.96 15.86, 17.81 16.35, 14.98 16.24"
      }
    ],
    [
      "path",
      {
        "d": "M 6.97 6.14 C 14.81 10.81, 9.83 7.97, 18.79 18.04"
      }
    ],
    [
      "path",
      {
        "d": "M 6.72 3.74 C 6.02 11.91, 16.58 4.58, 17.52 17.25"
      }
    ],
    [
      "path",
      {
        "d": "M 9.63 8.88 C 17.73 10.12, 15.71 12.62, 18.78 18.62"
      }
    ]
  ]
};

export const TaloRubber = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.20 7.52 C 13.96 15.86, 17.81 16.35, 14.98 16.24" />
      <path d="M 6.97 6.14 C 14.81 10.81, 9.83 7.97, 18.79 18.04" />
      <path d="M 6.72 3.74 C 6.02 11.91, 16.58 4.58, 17.52 17.25" />
      <path d="M 9.63 8.88 C 17.73 10.12, 15.71 12.62, 18.78 18.62" />
      {children}
    </svg>
  );
});

export default TaloRubber;
