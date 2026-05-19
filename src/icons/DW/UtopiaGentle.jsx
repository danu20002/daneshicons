import React from 'react';

export const iconData = {
  "id": "UtopiaGentle",
  "name": "UtopiaGentle",
  "category": "DW",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.29 9.12 C 11.19 4.03, 5.20 3.68, 12.17 20.29"
      }
    ],
    [
      "path",
      {
        "d": "M 15.85 13.10 L 8.66 3.03 L 3.68 21.04 L 6.24 6.81 L 9.49 2.08"
      }
    ],
    [
      "path",
      {
        "d": "M 18.42 19.50 Q 20.13 20.99 5.87 11.39"
      }
    ],
    [
      "path",
      {
        "d": "M 13.56 16.75 C 6.39 4.73, 10.50 20.65, 11.13 4.36"
      }
    ],
    [
      "path",
      {
        "d": "M 6.93 16.31 L 16.51 19.56 L 6.80 20.01 L 4.59 20.93 L 5.19 7.66 L 19.70 15.45"
      }
    ]
  ]
};

export const UtopiaGentle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.29 9.12 C 11.19 4.03, 5.20 3.68, 12.17 20.29" />
      <path d="M 15.85 13.10 L 8.66 3.03 L 3.68 21.04 L 6.24 6.81 L 9.49 2.08" />
      <path d="M 18.42 19.50 Q 20.13 20.99 5.87 11.39" />
      <path d="M 13.56 16.75 C 6.39 4.73, 10.50 20.65, 11.13 4.36" />
      <path d="M 6.93 16.31 L 16.51 19.56 L 6.80 20.01 L 4.59 20.93 L 5.19 7.66 L 19.70 15.45" />
      {children}
    </svg>
  );
});

export default UtopiaGentle;
