import React from 'react';

export const iconData = {
  "id": "StipiteFugue",
  "name": "StipiteFugue",
  "category": "RN",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.58 12.00 a 2.42 2.42 0 1 0 4.85 0 a 2.42 2.42 0 1 0 -4.85 0",
        "stroke-dasharray": "3 3"
      }
    ],
    [
      "path",
      {
        "d": "M 7.95 12.00 a 4.05 4.05 0 1 0 8.09 0 a 4.05 4.05 0 1 0 -8.09 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.73 12.00 a 5.27 5.27 0 1 0 10.54 0 a 5.27 5.27 0 1 0 -10.54 0",
        "stroke-dasharray": "6 1"
      }
    ],
    [
      "path",
      {
        "d": "M 5.09 12.00 a 6.91 6.91 0 1 0 13.83 0 a 6.91 6.91 0 1 0 -13.83 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.38 12.00 a 8.62 8.62 0 1 0 17.24 0 a 8.62 8.62 0 1 0 -17.24 0"
      }
    ]
  ]
};

export const StipiteFugue = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.58 12.00 a 2.42 2.42 0 1 0 4.85 0 a 2.42 2.42 0 1 0 -4.85 0" stroke-dasharray="3 3" />
      <path d="M 7.95 12.00 a 4.05 4.05 0 1 0 8.09 0 a 4.05 4.05 0 1 0 -8.09 0" />
      <path d="M 6.73 12.00 a 5.27 5.27 0 1 0 10.54 0 a 5.27 5.27 0 1 0 -10.54 0" stroke-dasharray="6 1" />
      <path d="M 5.09 12.00 a 6.91 6.91 0 1 0 13.83 0 a 6.91 6.91 0 1 0 -13.83 0" />
      <path d="M 3.38 12.00 a 8.62 8.62 0 1 0 17.24 0 a 8.62 8.62 0 1 0 -17.24 0" />
      {children}
    </svg>
  );
});

export default StipiteFugue;
