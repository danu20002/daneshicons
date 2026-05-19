import React from 'react';

export const iconData = {
  "id": "FronoCamp",
  "name": "FronoCamp",
  "category": "H",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.72 7.22 C 19.33 12.34, 5.51 16.08, 18.71 15.38"
      }
    ],
    [
      "path",
      {
        "d": "M 5.87 6.55 C 19.67 18.94, 12.56 14.66, 17.89 18.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.03 2.42 C 5.67 6.99, 17.39 8.96, 20.81 21.06"
      }
    ],
    [
      "path",
      {
        "d": "M 5.59 7.65 C 15.72 4.68, 18.95 12.40, 20.13 19.15"
      }
    ]
  ]
};

export const FronoCamp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.72 7.22 C 19.33 12.34, 5.51 16.08, 18.71 15.38" />
      <path d="M 5.87 6.55 C 19.67 18.94, 12.56 14.66, 17.89 18.00" />
      <path d="M 8.03 2.42 C 5.67 6.99, 17.39 8.96, 20.81 21.06" />
      <path d="M 5.59 7.65 C 15.72 4.68, 18.95 12.40, 20.13 19.15" />
      {children}
    </svg>
  );
});

export default FronoCamp;
