import React from 'react';

export const iconData = {
  "id": "TonicoStrong",
  "name": "TonicoStrong",
  "category": "FW",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.19 9.52 C 6.35 15.49, 15.39 6.96, 19.40 14.20"
      }
    ],
    [
      "path",
      {
        "d": "M 3.00 2.55 C 14.48 8.05, 7.13 15.22, 19.53 21.78"
      }
    ],
    [
      "path",
      {
        "d": "M 5.54 8.83 C 16.59 8.92, 15.08 10.35, 20.59 16.80"
      }
    ],
    [
      "path",
      {
        "d": "M 6.13 7.27 C 11.70 7.35, 13.74 14.80, 17.49 16.78"
      }
    ]
  ]
};

export const TonicoStrong = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.19 9.52 C 6.35 15.49, 15.39 6.96, 19.40 14.20" />
      <path d="M 3.00 2.55 C 14.48 8.05, 7.13 15.22, 19.53 21.78" />
      <path d="M 5.54 8.83 C 16.59 8.92, 15.08 10.35, 20.59 16.80" />
      <path d="M 6.13 7.27 C 11.70 7.35, 13.74 14.80, 17.49 16.78" />
      {children}
    </svg>
  );
});

export default TonicoStrong;
