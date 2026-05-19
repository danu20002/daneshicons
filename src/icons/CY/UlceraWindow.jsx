import React from 'react';

export const iconData = {
  "id": "UlceraWindow",
  "name": "UlceraWindow",
  "category": "CY",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.68 7.51 C 16.03 17.86, 14.06 4.45, 20.09 15.16"
      }
    ],
    [
      "path",
      {
        "d": "M 2.02 4.40 C 10.24 8.93, 10.62 7.47, 15.78 17.37"
      }
    ],
    [
      "path",
      {
        "d": "M 7.85 4.58 C 4.37 5.66, 7.90 9.93, 19.64 17.62"
      }
    ],
    [
      "path",
      {
        "d": "M 9.73 7.18 C 15.17 9.20, 17.02 10.35, 14.06 16.92"
      }
    ]
  ]
};

export const UlceraWindow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.68 7.51 C 16.03 17.86, 14.06 4.45, 20.09 15.16" />
      <path d="M 2.02 4.40 C 10.24 8.93, 10.62 7.47, 15.78 17.37" />
      <path d="M 7.85 4.58 C 4.37 5.66, 7.90 9.93, 19.64 17.62" />
      <path d="M 9.73 7.18 C 15.17 9.20, 17.02 10.35, 14.06 16.92" />
      {children}
    </svg>
  );
});

export default UlceraWindow;
