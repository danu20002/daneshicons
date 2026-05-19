import React from 'react';

export const iconData = {
  "id": "ZizzoloQuiz",
  "name": "ZizzoloQuiz",
  "category": "CY",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.32 7.72 C 11.02 6.48, 6.72 14.90, 16.80 16.02"
      }
    ],
    [
      "path",
      {
        "d": "M 5.19 6.62 C 10.93 17.50, 5.21 12.16, 15.76 15.46"
      }
    ],
    [
      "path",
      {
        "d": "M 2.98 2.09 C 11.30 12.86, 18.54 11.27, 21.30 14.96"
      }
    ],
    [
      "path",
      {
        "d": "M 7.52 2.28 C 14.53 4.98, 19.39 13.60, 21.14 15.09"
      }
    ],
    [
      "path",
      {
        "d": "M 7.51 4.25 C 5.33 16.97, 18.09 16.98, 14.32 21.73"
      }
    ]
  ]
};

export const ZizzoloQuiz = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.32 7.72 C 11.02 6.48, 6.72 14.90, 16.80 16.02" />
      <path d="M 5.19 6.62 C 10.93 17.50, 5.21 12.16, 15.76 15.46" />
      <path d="M 2.98 2.09 C 11.30 12.86, 18.54 11.27, 21.30 14.96" />
      <path d="M 7.52 2.28 C 14.53 4.98, 19.39 13.60, 21.14 15.09" />
      <path d="M 7.51 4.25 C 5.33 16.97, 18.09 16.98, 14.32 21.73" />
      {children}
    </svg>
  );
});

export default ZizzoloQuiz;
