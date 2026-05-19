import React from 'react';

export const iconData = {
  "id": "CalciNotch",
  "name": "CalciNotch",
  "category": "YD",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.41 6.53 C 18.71 11.49, 11.37 13.33, 14.59 17.94"
      }
    ],
    [
      "path",
      {
        "d": "M 7.36 5.42 C 16.41 4.17, 13.71 14.38, 18.78 15.42"
      }
    ],
    [
      "path",
      {
        "d": "M 4.64 7.81 C 12.45 13.85, 7.86 18.15, 19.57 14.14"
      }
    ],
    [
      "path",
      {
        "d": "M 9.25 7.19 C 17.76 19.39, 4.53 6.00, 18.91 18.77"
      }
    ]
  ]
};

export const CalciNotch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.41 6.53 C 18.71 11.49, 11.37 13.33, 14.59 17.94" />
      <path d="M 7.36 5.42 C 16.41 4.17, 13.71 14.38, 18.78 15.42" />
      <path d="M 4.64 7.81 C 12.45 13.85, 7.86 18.15, 19.57 14.14" />
      <path d="M 9.25 7.19 C 17.76 19.39, 4.53 6.00, 18.91 18.77" />
      {children}
    </svg>
  );
});

export default CalciNotch;
