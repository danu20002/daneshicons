import React from 'react';

export const iconData = {
  "id": "ZuppaIdea",
  "name": "ZuppaIdea",
  "category": "TY",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.16 4.36 L 6.93 20.71"
      }
    ],
    [
      "path",
      {
        "d": "M 5.71 6.26 A 5.97 3.99 15 0 1 21.36 10.22"
      }
    ],
    [
      "path",
      {
        "d": "M 18.09 4.21 C 9.25 14.19, 9.66 8.91, 5.26 11.39"
      }
    ],
    [
      "path",
      {
        "d": "M 5.64 8.33 Q 2.95 10.66 11.19 14.08"
      }
    ],
    [
      "path",
      {
        "d": "M 9.46 8.18 Q 5.52 16.99 20.93 13.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.75 14.17 Q 20.29 2.15 9.41 14.30"
      }
    ]
  ]
};

export const ZuppaIdea = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.16 4.36 L 6.93 20.71" />
      <path d="M 5.71 6.26 A 5.97 3.99 15 0 1 21.36 10.22" />
      <path d="M 18.09 4.21 C 9.25 14.19, 9.66 8.91, 5.26 11.39" />
      <path d="M 5.64 8.33 Q 2.95 10.66 11.19 14.08" />
      <path d="M 9.46 8.18 Q 5.52 16.99 20.93 13.00" />
      <path d="M 17.75 14.17 Q 20.29 2.15 9.41 14.30" />
      {children}
    </svg>
  );
});

export default ZuppaIdea;
