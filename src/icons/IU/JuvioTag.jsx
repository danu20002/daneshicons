import React from 'react';

export const iconData = {
  "id": "JuvioTag",
  "name": "JuvioTag",
  "category": "IU",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.16 6.49 C 7.86 16.26, 6.88 12.00, 15.87 19.59"
      }
    ],
    [
      "path",
      {
        "d": "M 8.42 8.01 C 7.81 7.83, 9.36 16.97, 19.45 16.09"
      }
    ],
    [
      "path",
      {
        "d": "M 6.96 5.41 C 8.93 16.83, 10.71 11.09, 19.21 19.82"
      }
    ],
    [
      "path",
      {
        "d": "M 4.85 6.88 C 7.96 11.61, 10.19 18.91, 15.30 18.65"
      }
    ],
    [
      "path",
      {
        "d": "M 6.52 7.73 C 11.00 12.36, 13.50 13.40, 19.14 15.73"
      }
    ]
  ]
};

export const JuvioTag = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.16 6.49 C 7.86 16.26, 6.88 12.00, 15.87 19.59" />
      <path d="M 8.42 8.01 C 7.81 7.83, 9.36 16.97, 19.45 16.09" />
      <path d="M 6.96 5.41 C 8.93 16.83, 10.71 11.09, 19.21 19.82" />
      <path d="M 4.85 6.88 C 7.96 11.61, 10.19 18.91, 15.30 18.65" />
      <path d="M 6.52 7.73 C 11.00 12.36, 13.50 13.40, 19.14 15.73" />
      {children}
    </svg>
  );
});

export default JuvioTag;
