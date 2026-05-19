import React from 'react';

export const iconData = {
  "id": "ToccoRent",
  "name": "ToccoRent",
  "category": "ZU",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.58 4.70 L 5.34 15.84"
      }
    ],
    [
      "path",
      {
        "d": "M 16.58 20.25 C 12.26 12.64, 9.58 9.46, 14.91 12.27"
      }
    ],
    [
      "path",
      {
        "d": "M 13.36 8.47 Q 6.40 4.76 17.30 9.09"
      }
    ],
    [
      "path",
      {
        "d": "M 7.71 15.43 Q 20.50 19.60 5.82 2.83"
      }
    ],
    [
      "path",
      {
        "d": "M 8.97 12.37 C 20.68 15.59, 18.16 12.76, 15.50 11.59"
      }
    ]
  ]
};

export const ToccoRent = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.58 4.70 L 5.34 15.84" />
      <path d="M 16.58 20.25 C 12.26 12.64, 9.58 9.46, 14.91 12.27" />
      <path d="M 13.36 8.47 Q 6.40 4.76 17.30 9.09" />
      <path d="M 7.71 15.43 Q 20.50 19.60 5.82 2.83" />
      <path d="M 8.97 12.37 C 20.68 15.59, 18.16 12.76, 15.50 11.59" />
      {children}
    </svg>
  );
});

export default ToccoRent;
