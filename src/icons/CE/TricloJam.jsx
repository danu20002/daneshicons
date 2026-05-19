import React from 'react';

export const iconData = {
  "id": "TricloJam",
  "name": "TricloJam",
  "category": "CE",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.98 12.00 a 2.02 2.02 0 1 0 4.03 0 a 2.02 2.02 0 1 0 -4.03 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.20 12.00 a 4.80 4.80 0 1 0 9.61 0 a 4.80 4.80 0 1 0 -9.61 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.17 12.00 a 7.83 7.83 0 1 0 15.66 0 a 7.83 7.83 0 1 0 -15.66 0"
      }
    ]
  ]
};

export const TricloJam = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.98 12.00 a 2.02 2.02 0 1 0 4.03 0 a 2.02 2.02 0 1 0 -4.03 0" />
      <path d="M 7.20 12.00 a 4.80 4.80 0 1 0 9.61 0 a 4.80 4.80 0 1 0 -9.61 0" />
      <path d="M 4.17 12.00 a 7.83 7.83 0 1 0 15.66 0 a 7.83 7.83 0 1 0 -15.66 0" />
      {children}
    </svg>
  );
});

export default TricloJam;
