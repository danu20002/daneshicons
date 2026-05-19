import React from 'react';

export const iconData = {
  "id": "YellowSqueeze",
  "name": "YellowSqueeze",
  "category": "JV",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.77 3.35 L 6.62 5.81 L 9.56 2.98 L 11.21 1.00 L 10.88 1.70 L 13.07 1.00 L 13.88 1.00 L 11.78 1.00 L 8.80 2.12 L 10.93 3.55 L 10.53 6.50 L 13.03 5.44 L 14.58 7.01 L 13.86 7.24 L 15.53 5.83 L 13.73 6.51 L 13.01 5.01 L 13.22 3.61"
      }
    ],
    [
      "path",
      {
        "d": "M 4.39 14.36 L 2.29 14.00 L 4.46 12.69 L 2.70 13.06 L 3.35 16.04 L 4.34 16.53 L 1.82 15.54 L 4.32 13.71 L 1.53 14.11 L 1.00 13.45 L 2.88 15.15 L 4.94 16.83 L 6.68 16.26 L 6.24 17.69 L 8.40 19.87 L 10.58 19.76 L 10.06 17.39 L 11.12 18.02"
      }
    ]
  ]
};

export const YellowSqueeze = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.77 3.35 L 6.62 5.81 L 9.56 2.98 L 11.21 1.00 L 10.88 1.70 L 13.07 1.00 L 13.88 1.00 L 11.78 1.00 L 8.80 2.12 L 10.93 3.55 L 10.53 6.50 L 13.03 5.44 L 14.58 7.01 L 13.86 7.24 L 15.53 5.83 L 13.73 6.51 L 13.01 5.01 L 13.22 3.61" />
      <path d="M 4.39 14.36 L 2.29 14.00 L 4.46 12.69 L 2.70 13.06 L 3.35 16.04 L 4.34 16.53 L 1.82 15.54 L 4.32 13.71 L 1.53 14.11 L 1.00 13.45 L 2.88 15.15 L 4.94 16.83 L 6.68 16.26 L 6.24 17.69 L 8.40 19.87 L 10.58 19.76 L 10.06 17.39 L 11.12 18.02" />
      {children}
    </svg>
  );
});

export default YellowSqueeze;
