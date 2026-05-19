import React from 'react';

export const iconData = {
  "id": "ZinzinoDetect",
  "name": "ZinzinoDetect",
  "category": "PI",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.86 12.00 a 2.14 2.14 0 1 0 4.28 0 a 2.14 2.14 0 1 0 -4.28 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.99 12.00 a 4.01 4.01 0 1 0 8.03 0 a 4.01 4.01 0 1 0 -8.03 0",
        "stroke-dasharray": "5 2"
      }
    ],
    [
      "path",
      {
        "d": "M 5.54 12.00 a 6.46 6.46 0 1 0 12.91 0 a 6.46 6.46 0 1 0 -12.91 0",
        "stroke-dasharray": "3 3"
      }
    ],
    [
      "path",
      {
        "d": "M 3.53 12.00 a 8.47 8.47 0 1 0 16.93 0 a 8.47 8.47 0 1 0 -16.93 0",
        "stroke-dasharray": "5 3"
      }
    ]
  ]
};

export const ZinzinoDetect = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.86 12.00 a 2.14 2.14 0 1 0 4.28 0 a 2.14 2.14 0 1 0 -4.28 0" />
      <path d="M 7.99 12.00 a 4.01 4.01 0 1 0 8.03 0 a 4.01 4.01 0 1 0 -8.03 0" stroke-dasharray="5 2" />
      <path d="M 5.54 12.00 a 6.46 6.46 0 1 0 12.91 0 a 6.46 6.46 0 1 0 -12.91 0" stroke-dasharray="3 3" />
      <path d="M 3.53 12.00 a 8.47 8.47 0 1 0 16.93 0 a 8.47 8.47 0 1 0 -16.93 0" stroke-dasharray="5 3" />
      {children}
    </svg>
  );
});

export default ZinzinoDetect;
