import React from 'react';

export const iconData = {
  "id": "TomoRelief",
  "name": "TomoRelief",
  "category": "YW",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.43 4.54 C 13.75 5.99, 10.75 8.21, 17.90 19.47"
      }
    ],
    [
      "path",
      {
        "d": "M 3.04 2.82 C 14.90 18.95, 15.88 18.98, 14.37 14.55"
      }
    ],
    [
      "path",
      {
        "d": "M 3.97 7.38 C 13.24 14.30, 13.63 13.57, 17.92 21.76"
      }
    ]
  ]
};

export const TomoRelief = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.43 4.54 C 13.75 5.99, 10.75 8.21, 17.90 19.47" />
      <path d="M 3.04 2.82 C 14.90 18.95, 15.88 18.98, 14.37 14.55" />
      <path d="M 3.97 7.38 C 13.24 14.30, 13.63 13.57, 17.92 21.76" />
      {children}
    </svg>
  );
});

export default TomoRelief;
