import React from 'react';

export const iconData = {
  "id": "VersoParfait",
  "name": "VersoParfait",
  "category": "IB",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.70 4.92 C 13.34 10.93, 7.22 11.31, 20.98 16.25"
      }
    ],
    [
      "path",
      {
        "d": "M 5.62 5.62 C 14.04 4.69, 17.60 13.02, 17.93 20.34"
      }
    ],
    [
      "path",
      {
        "d": "M 3.73 4.32 C 13.77 12.45, 5.19 13.49, 18.18 16.82"
      }
    ],
    [
      "path",
      {
        "d": "M 4.61 5.19 C 17.51 4.23, 10.61 19.54, 16.55 17.50"
      }
    ]
  ]
};

export const VersoParfait = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.70 4.92 C 13.34 10.93, 7.22 11.31, 20.98 16.25" />
      <path d="M 5.62 5.62 C 14.04 4.69, 17.60 13.02, 17.93 20.34" />
      <path d="M 3.73 4.32 C 13.77 12.45, 5.19 13.49, 18.18 16.82" />
      <path d="M 4.61 5.19 C 17.51 4.23, 10.61 19.54, 16.55 17.50" />
      {children}
    </svg>
  );
});

export default VersoParfait;
