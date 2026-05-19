import React from 'react';

export const iconData = {
  "id": "TaphoHay",
  "name": "TaphoHay",
  "category": "QC",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.40 7.84 C 12.13 17.49, 10.32 19.02, 18.13 16.83"
      }
    ],
    [
      "path",
      {
        "d": "M 5.97 6.98 C 18.83 15.57, 18.11 12.19, 21.33 20.46"
      }
    ],
    [
      "path",
      {
        "d": "M 8.70 4.57 C 18.25 8.06, 16.61 9.89, 19.18 14.01"
      }
    ]
  ]
};

export const TaphoHay = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.40 7.84 C 12.13 17.49, 10.32 19.02, 18.13 16.83" />
      <path d="M 5.97 6.98 C 18.83 15.57, 18.11 12.19, 21.33 20.46" />
      <path d="M 8.70 4.57 C 18.25 8.06, 16.61 9.89, 19.18 14.01" />
      {children}
    </svg>
  );
});

export default TaphoHay;
