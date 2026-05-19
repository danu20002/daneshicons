import React from 'react';

export const iconData = {
  "id": "YenUrban",
  "name": "YenUrban",
  "category": "BX",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.03 12.00 a 8.97 8.97 0 1 0 17.93 0 a 8.97 8.97 0 1 0 -17.93 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.71 12.00 a 7.29 7.29 0 1 1 14.57 0 a 7.29 7.29 0 1 1 -14.57 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.47 12.00 L 22.47 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.28 18.62 L 18.53 20.18"
      }
    ],
    [
      "path",
      {
        "d": "M 10.12 20.25 L 9.67 22.20"
      }
    ],
    [
      "path",
      {
        "d": "M 4.37 15.67 L 2.57 16.54"
      }
    ],
    [
      "path",
      {
        "d": "M 4.37 8.33 L 2.57 7.46"
      }
    ],
    [
      "path",
      {
        "d": "M 10.12 3.75 L 9.67 1.80"
      }
    ],
    [
      "path",
      {
        "d": "M 17.28 5.38 L 18.53 3.82"
      }
    ]
  ]
};

export const YenUrban = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.03 12.00 a 8.97 8.97 0 1 0 17.93 0 a 8.97 8.97 0 1 0 -17.93 0" />
      <path d="M 4.71 12.00 a 7.29 7.29 0 1 1 14.57 0 a 7.29 7.29 0 1 1 -14.57 0" />
      <path d="M 20.47 12.00 L 22.47 12.00" />
      <path d="M 17.28 18.62 L 18.53 20.18" />
      <path d="M 10.12 20.25 L 9.67 22.20" />
      <path d="M 4.37 15.67 L 2.57 16.54" />
      <path d="M 4.37 8.33 L 2.57 7.46" />
      <path d="M 10.12 3.75 L 9.67 1.80" />
      <path d="M 17.28 5.38 L 18.53 3.82" />
      {children}
    </svg>
  );
});

export default YenUrban;
