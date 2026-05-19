import React from 'react';

export const iconData = {
  "id": "TractoLecture",
  "name": "TractoLecture",
  "category": "DD",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.50 2.18 C 10.25 18.49, 8.63 21.53, 6.07 11.79"
      }
    ],
    [
      "path",
      {
        "d": "M 12.14 9.81 L 2.32 4.53 L 3.97 8.49 L 11.49 8.78 L 18.50 4.65"
      }
    ],
    [
      "path",
      {
        "d": "M 11.28 16.64 Q 17.50 10.27 4.43 16.71"
      }
    ],
    [
      "path",
      {
        "d": "M 20.68 6.13 L 15.76 14.38"
      }
    ]
  ]
};

export const TractoLecture = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.50 2.18 C 10.25 18.49, 8.63 21.53, 6.07 11.79" />
      <path d="M 12.14 9.81 L 2.32 4.53 L 3.97 8.49 L 11.49 8.78 L 18.50 4.65" />
      <path d="M 11.28 16.64 Q 17.50 10.27 4.43 16.71" />
      <path d="M 20.68 6.13 L 15.76 14.38" />
      {children}
    </svg>
  );
});

export default TractoLecture;
