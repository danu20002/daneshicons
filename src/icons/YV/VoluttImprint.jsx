import React from 'react';

export const iconData = {
  "id": "VoluttImprint",
  "name": "VoluttImprint",
  "category": "YV",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.57 12.00 a 2.43 2.43 0 1 0 4.85 0 a 2.43 2.43 0 1 0 -4.85 0",
        "stroke-dasharray": "3 2"
      }
    ],
    [
      "path",
      {
        "d": "M 6.89 12.00 a 5.11 5.11 0 1 0 10.21 0 a 5.11 5.11 0 1 0 -10.21 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.26 12.00 a 7.74 7.74 0 1 0 15.48 0 a 7.74 7.74 0 1 0 -15.48 0",
        "stroke-dasharray": "5 1"
      }
    ]
  ]
};

export const VoluttImprint = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.57 12.00 a 2.43 2.43 0 1 0 4.85 0 a 2.43 2.43 0 1 0 -4.85 0" stroke-dasharray="3 2" />
      <path d="M 6.89 12.00 a 5.11 5.11 0 1 0 10.21 0 a 5.11 5.11 0 1 0 -10.21 0" />
      <path d="M 4.26 12.00 a 7.74 7.74 0 1 0 15.48 0 a 7.74 7.74 0 1 0 -15.48 0" stroke-dasharray="5 1" />
      {children}
    </svg>
  );
});

export default VoluttImprint;
