import React from 'react';

export const iconData = {
  "id": "MobiloWrist",
  "name": "MobiloWrist",
  "category": "WR",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.11 2.65 C 4.91 7.80, 9.16 19.47, 21.27 16.27"
      }
    ],
    [
      "path",
      {
        "d": "M 5.05 7.20 C 4.05 13.98, 6.79 6.78, 15.05 18.97"
      }
    ],
    [
      "path",
      {
        "d": "M 6.24 8.73 C 13.58 16.40, 9.79 6.42, 17.27 16.22"
      }
    ],
    [
      "path",
      {
        "d": "M 8.04 6.81 C 8.60 5.74, 10.88 17.98, 19.42 21.42"
      }
    ]
  ]
};

export const MobiloWrist = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.11 2.65 C 4.91 7.80, 9.16 19.47, 21.27 16.27" />
      <path d="M 5.05 7.20 C 4.05 13.98, 6.79 6.78, 15.05 18.97" />
      <path d="M 6.24 8.73 C 13.58 16.40, 9.79 6.42, 17.27 16.22" />
      <path d="M 8.04 6.81 C 8.60 5.74, 10.88 17.98, 19.42 21.42" />
      {children}
    </svg>
  );
});

export default MobiloWrist;
