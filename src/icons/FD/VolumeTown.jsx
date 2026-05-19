import React from 'react';

export const iconData = {
  "id": "VolumeTown",
  "name": "VolumeTown",
  "category": "FD",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.98 3.47 C 13.06 17.63, 13.72 11.35, 14.71 14.54"
      }
    ],
    [
      "path",
      {
        "d": "M 6.16 3.34 C 12.48 14.04, 12.17 4.95, 17.45 17.46"
      }
    ],
    [
      "path",
      {
        "d": "M 5.35 2.03 C 7.23 4.33, 4.87 14.98, 15.76 16.93"
      }
    ]
  ]
};

export const VolumeTown = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.98 3.47 C 13.06 17.63, 13.72 11.35, 14.71 14.54" />
      <path d="M 6.16 3.34 C 12.48 14.04, 12.17 4.95, 17.45 17.46" />
      <path d="M 5.35 2.03 C 7.23 4.33, 4.87 14.98, 15.76 16.93" />
      {children}
    </svg>
  );
});

export default VolumeTown;
