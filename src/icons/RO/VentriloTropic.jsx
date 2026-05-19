import React from 'react';

export const iconData = {
  "id": "VentriloTropic",
  "name": "VentriloTropic",
  "category": "RO",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.18 8.61 C 14.25 17.66, 12.81 19.74, 20.25 20.65"
      }
    ],
    [
      "path",
      {
        "d": "M 9.37 7.58 C 7.02 7.36, 19.02 13.11, 21.86 14.15"
      }
    ],
    [
      "path",
      {
        "d": "M 2.39 5.70 C 14.16 15.02, 19.42 16.89, 14.65 19.80"
      }
    ]
  ]
};

export const VentriloTropic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.18 8.61 C 14.25 17.66, 12.81 19.74, 20.25 20.65" />
      <path d="M 9.37 7.58 C 7.02 7.36, 19.02 13.11, 21.86 14.15" />
      <path d="M 2.39 5.70 C 14.16 15.02, 19.42 16.89, 14.65 19.80" />
      {children}
    </svg>
  );
});

export default VentriloTropic;
