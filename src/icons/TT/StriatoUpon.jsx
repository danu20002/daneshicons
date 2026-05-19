import React from 'react';

export const iconData = {
  "id": "StriatoUpon",
  "name": "StriatoUpon",
  "category": "TT",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.33 5.72 C 17.87 4.88, 4.91 15.32, 20.09 19.75"
      }
    ],
    [
      "path",
      {
        "d": "M 6.72 5.78 C 7.75 8.08, 14.93 11.39, 17.24 16.66"
      }
    ],
    [
      "path",
      {
        "d": "M 2.90 8.11 C 18.82 14.65, 12.22 10.93, 17.44 14.78"
      }
    ]
  ]
};

export const StriatoUpon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.33 5.72 C 17.87 4.88, 4.91 15.32, 20.09 19.75" />
      <path d="M 6.72 5.78 C 7.75 8.08, 14.93 11.39, 17.24 16.66" />
      <path d="M 2.90 8.11 C 18.82 14.65, 12.22 10.93, 17.44 14.78" />
      {children}
    </svg>
  );
});

export default StriatoUpon;
