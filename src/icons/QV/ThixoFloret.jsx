import React from 'react';

export const iconData = {
  "id": "ThixoFloret",
  "name": "ThixoFloret",
  "category": "QV",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.35 6.70 C 19.00 8.76, 11.18 12.54, 18.72 20.67"
      }
    ],
    [
      "path",
      {
        "d": "M 5.73 7.96 C 6.15 9.38, 19.40 17.75, 16.09 20.19"
      }
    ],
    [
      "path",
      {
        "d": "M 2.39 6.67 C 9.49 18.78, 18.07 13.35, 20.97 16.18"
      }
    ],
    [
      "path",
      {
        "d": "M 4.79 6.98 C 8.06 6.86, 4.96 9.16, 18.99 19.86"
      }
    ],
    [
      "path",
      {
        "d": "M 8.93 2.98 C 10.39 8.43, 9.33 8.09, 14.98 15.60"
      }
    ]
  ]
};

export const ThixoFloret = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.35 6.70 C 19.00 8.76, 11.18 12.54, 18.72 20.67" />
      <path d="M 5.73 7.96 C 6.15 9.38, 19.40 17.75, 16.09 20.19" />
      <path d="M 2.39 6.67 C 9.49 18.78, 18.07 13.35, 20.97 16.18" />
      <path d="M 4.79 6.98 C 8.06 6.86, 4.96 9.16, 18.99 19.86" />
      <path d="M 8.93 2.98 C 10.39 8.43, 9.33 8.09, 14.98 15.60" />
      {children}
    </svg>
  );
});

export default ThixoFloret;
