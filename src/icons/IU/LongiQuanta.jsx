import React from 'react';

export const iconData = {
  "id": "LongiQuanta",
  "name": "LongiQuanta",
  "category": "IU",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.14 7.34 C 14.93 7.72, 18.04 16.13, 18.43 16.55"
      }
    ],
    [
      "path",
      {
        "d": "M 2.77 7.92 C 13.80 4.99, 12.92 9.12, 14.63 21.18"
      }
    ],
    [
      "path",
      {
        "d": "M 7.29 8.02 C 18.99 8.40, 6.30 9.38, 21.83 16.24"
      }
    ],
    [
      "path",
      {
        "d": "M 9.22 7.87 C 11.63 7.83, 15.67 4.09, 18.60 18.85"
      }
    ]
  ]
};

export const LongiQuanta = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.14 7.34 C 14.93 7.72, 18.04 16.13, 18.43 16.55" />
      <path d="M 2.77 7.92 C 13.80 4.99, 12.92 9.12, 14.63 21.18" />
      <path d="M 7.29 8.02 C 18.99 8.40, 6.30 9.38, 21.83 16.24" />
      <path d="M 9.22 7.87 C 11.63 7.83, 15.67 4.09, 18.60 18.85" />
      {children}
    </svg>
  );
});

export default LongiQuanta;
