import React from 'react';

export const iconData = {
  "id": "PhotoTrance",
  "name": "PhotoTrance",
  "category": "JM",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.53 12.00 a 2.47 2.47 0 1 0 4.94 0 a 2.47 2.47 0 1 0 -4.94 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.13 12.00 a 3.87 3.87 0 1 0 7.73 0 a 3.87 3.87 0 1 0 -7.73 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.62 12.00 a 5.38 5.38 0 1 0 10.76 0 a 5.38 5.38 0 1 0 -10.76 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.80 12.00 a 7.20 7.20 0 1 0 14.40 0 a 7.20 7.20 0 1 0 -14.40 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.41 12.00 a 8.59 8.59 0 1 0 17.18 0 a 8.59 8.59 0 1 0 -17.18 0"
      }
    ]
  ]
};

export const PhotoTrance = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.53 12.00 a 2.47 2.47 0 1 0 4.94 0 a 2.47 2.47 0 1 0 -4.94 0" />
      <path d="M 8.13 12.00 a 3.87 3.87 0 1 0 7.73 0 a 3.87 3.87 0 1 0 -7.73 0" />
      <path d="M 6.62 12.00 a 5.38 5.38 0 1 0 10.76 0 a 5.38 5.38 0 1 0 -10.76 0" />
      <path d="M 4.80 12.00 a 7.20 7.20 0 1 0 14.40 0 a 7.20 7.20 0 1 0 -14.40 0" />
      <path d="M 3.41 12.00 a 8.59 8.59 0 1 0 17.18 0 a 8.59 8.59 0 1 0 -17.18 0" />
      {children}
    </svg>
  );
});

export default PhotoTrance;
