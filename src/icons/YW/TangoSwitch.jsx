import React from 'react';

export const iconData = {
  "id": "TangoSwitch",
  "name": "TangoSwitch",
  "category": "YW",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.10 7.01 C 19.19 9.41, 4.76 7.41, 15.33 16.11"
      }
    ],
    [
      "path",
      {
        "d": "M 5.72 8.07 C 9.11 14.88, 15.03 18.04, 20.80 14.48"
      }
    ],
    [
      "path",
      {
        "d": "M 9.62 7.43 C 19.07 7.20, 16.26 5.69, 16.62 19.15"
      }
    ],
    [
      "path",
      {
        "d": "M 4.49 8.26 C 17.08 12.23, 13.09 16.72, 20.14 20.67"
      }
    ],
    [
      "path",
      {
        "d": "M 7.85 5.22 C 14.48 12.78, 9.92 16.33, 20.62 14.19"
      }
    ]
  ]
};

export const TangoSwitch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.10 7.01 C 19.19 9.41, 4.76 7.41, 15.33 16.11" />
      <path d="M 5.72 8.07 C 9.11 14.88, 15.03 18.04, 20.80 14.48" />
      <path d="M 9.62 7.43 C 19.07 7.20, 16.26 5.69, 16.62 19.15" />
      <path d="M 4.49 8.26 C 17.08 12.23, 13.09 16.72, 20.14 20.67" />
      <path d="M 7.85 5.22 C 14.48 12.78, 9.92 16.33, 20.62 14.19" />
      {children}
    </svg>
  );
});

export default TangoSwitch;
