import React from 'react';

export const iconData = {
  "id": "TitilloPeriod",
  "name": "TitilloPeriod",
  "category": "BM",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.83 8.23 C 14.35 19.10, 15.83 18.92, 17.84 19.37"
      }
    ],
    [
      "path",
      {
        "d": "M 7.00 2.71 C 13.42 4.37, 18.67 17.49, 19.69 15.63"
      }
    ],
    [
      "path",
      {
        "d": "M 9.64 3.02 C 5.41 13.32, 14.60 8.05, 17.68 19.23"
      }
    ]
  ]
};

export const TitilloPeriod = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.83 8.23 C 14.35 19.10, 15.83 18.92, 17.84 19.37" />
      <path d="M 7.00 2.71 C 13.42 4.37, 18.67 17.49, 19.69 15.63" />
      <path d="M 9.64 3.02 C 5.41 13.32, 14.60 8.05, 17.68 19.23" />
      {children}
    </svg>
  );
});

export default TitilloPeriod;
