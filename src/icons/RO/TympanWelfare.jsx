import React from 'react';

export const iconData = {
  "id": "TympanWelfare",
  "name": "TympanWelfare",
  "category": "RO",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.69 7.32 C 17.90 4.23, 13.68 12.96, 18.14 14.65"
      }
    ],
    [
      "path",
      {
        "d": "M 6.34 9.51 C 13.04 6.39, 16.91 12.72, 15.03 15.17"
      }
    ],
    [
      "path",
      {
        "d": "M 5.63 5.16 C 9.76 13.08, 19.47 4.67, 21.99 17.61"
      }
    ],
    [
      "path",
      {
        "d": "M 8.25 7.74 C 15.15 18.51, 10.35 14.17, 15.60 18.11"
      }
    ]
  ]
};

export const TympanWelfare = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.69 7.32 C 17.90 4.23, 13.68 12.96, 18.14 14.65" />
      <path d="M 6.34 9.51 C 13.04 6.39, 16.91 12.72, 15.03 15.17" />
      <path d="M 5.63 5.16 C 9.76 13.08, 19.47 4.67, 21.99 17.61" />
      <path d="M 8.25 7.74 C 15.15 18.51, 10.35 14.17, 15.60 18.11" />
      {children}
    </svg>
  );
});

export default TympanWelfare;
