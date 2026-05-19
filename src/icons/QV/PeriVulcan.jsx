import React from 'react';

export const iconData = {
  "id": "PeriVulcan",
  "name": "PeriVulcan",
  "category": "QV",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.42 4.17 C 10.05 9.60, 4.04 15.11, 17.14 21.47"
      }
    ],
    [
      "path",
      {
        "d": "M 7.79 8.65 C 16.00 7.89, 14.88 7.40, 15.08 18.20"
      }
    ],
    [
      "path",
      {
        "d": "M 3.28 5.35 C 12.64 8.03, 4.96 16.47, 16.58 14.14"
      }
    ]
  ]
};

export const PeriVulcan = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.42 4.17 C 10.05 9.60, 4.04 15.11, 17.14 21.47" />
      <path d="M 7.79 8.65 C 16.00 7.89, 14.88 7.40, 15.08 18.20" />
      <path d="M 3.28 5.35 C 12.64 8.03, 4.96 16.47, 16.58 14.14" />
      {children}
    </svg>
  );
});

export default PeriVulcan;
