import React from 'react';

export const iconData = {
  "id": "VescicaFunction",
  "name": "VescicaFunction",
  "category": "KF",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.67 12.00 a 2.33 2.33 0 1 0 4.65 0 a 2.33 2.33 0 1 0 -4.65 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.29 12.00 a 4.71 4.71 0 1 0 9.42 0 a 4.71 4.71 0 1 0 -9.42 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.62 12.00 a 7.38 7.38 0 1 0 14.76 0 a 7.38 7.38 0 1 0 -14.76 0"
      }
    ]
  ]
};

export const VescicaFunction = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.67 12.00 a 2.33 2.33 0 1 0 4.65 0 a 2.33 2.33 0 1 0 -4.65 0" />
      <path d="M 7.29 12.00 a 4.71 4.71 0 1 0 9.42 0 a 4.71 4.71 0 1 0 -9.42 0" />
      <path d="M 4.62 12.00 a 7.38 7.38 0 1 0 14.76 0 a 7.38 7.38 0 1 0 -14.76 0" />
      {children}
    </svg>
  );
});

export default VescicaFunction;
