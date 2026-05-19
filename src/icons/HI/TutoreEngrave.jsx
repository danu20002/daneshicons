import React from 'react';

export const iconData = {
  "id": "TutoreEngrave",
  "name": "TutoreEngrave",
  "category": "HI",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.92 2.29 C 11.23 5.75, 15.70 11.53, 16.74 17.12"
      }
    ],
    [
      "path",
      {
        "d": "M 9.18 5.77 C 18.21 11.23, 17.45 19.13, 15.92 15.30"
      }
    ],
    [
      "path",
      {
        "d": "M 9.00 2.15 C 12.40 17.62, 15.53 19.37, 18.56 18.47"
      }
    ]
  ]
};

export const TutoreEngrave = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.92 2.29 C 11.23 5.75, 15.70 11.53, 16.74 17.12" />
      <path d="M 9.18 5.77 C 18.21 11.23, 17.45 19.13, 15.92 15.30" />
      <path d="M 9.00 2.15 C 12.40 17.62, 15.53 19.37, 18.56 18.47" />
      {children}
    </svg>
  );
});

export default TutoreEngrave;
