import React from 'react';

export const iconData = {
  "id": "QuebraVerb",
  "name": "QuebraVerb",
  "category": "WR",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.80 2.43 C 17.39 17.94, 6.20 13.61, 22.00 21.47"
      }
    ],
    [
      "path",
      {
        "d": "M 7.28 5.32 C 10.12 16.31, 6.66 15.71, 16.83 17.35"
      }
    ],
    [
      "path",
      {
        "d": "M 9.92 3.71 C 9.34 17.69, 5.60 16.60, 21.42 16.22"
      }
    ],
    [
      "path",
      {
        "d": "M 6.87 3.15 C 11.99 14.15, 6.89 8.40, 14.33 14.89"
      }
    ]
  ]
};

export const QuebraVerb = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.80 2.43 C 17.39 17.94, 6.20 13.61, 22.00 21.47" />
      <path d="M 7.28 5.32 C 10.12 16.31, 6.66 15.71, 16.83 17.35" />
      <path d="M 9.92 3.71 C 9.34 17.69, 5.60 16.60, 21.42 16.22" />
      <path d="M 6.87 3.15 C 11.99 14.15, 6.89 8.40, 14.33 14.89" />
      {children}
    </svg>
  );
});

export default QuebraVerb;
