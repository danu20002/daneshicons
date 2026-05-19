import React from 'react';

export const iconData = {
  "id": "MarmoMeek",
  "name": "MarmoMeek",
  "category": "BM",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.76 4.85 C 7.46 6.48, 4.96 5.14, 15.43 18.28"
      }
    ],
    [
      "path",
      {
        "d": "M 5.09 9.92 C 17.49 17.86, 9.40 17.00, 14.44 15.80"
      }
    ],
    [
      "path",
      {
        "d": "M 9.84 2.02 C 10.16 15.79, 8.89 14.87, 21.53 20.23"
      }
    ],
    [
      "path",
      {
        "d": "M 4.03 9.91 C 10.56 10.86, 13.42 7.16, 14.71 20.44"
      }
    ]
  ]
};

export const MarmoMeek = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.76 4.85 C 7.46 6.48, 4.96 5.14, 15.43 18.28" />
      <path d="M 5.09 9.92 C 17.49 17.86, 9.40 17.00, 14.44 15.80" />
      <path d="M 9.84 2.02 C 10.16 15.79, 8.89 14.87, 21.53 20.23" />
      <path d="M 4.03 9.91 C 10.56 10.86, 13.42 7.16, 14.71 20.44" />
      {children}
    </svg>
  );
});

export default MarmoMeek;
