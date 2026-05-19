import React from 'react';

export const iconData = {
  "id": "KleptoSaber",
  "name": "KleptoSaber",
  "category": "WQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.81 12.00 a 2.19 2.19 0 1 0 4.38 0 a 2.19 2.19 0 1 0 -4.38 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.31 12.00 a 3.69 3.69 0 1 0 7.39 0 a 3.69 3.69 0 1 0 -7.39 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.41 12.00 a 5.59 5.59 0 1 0 11.18 0 a 5.59 5.59 0 1 0 -11.18 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.03 12.00 a 6.97 6.97 0 1 0 13.95 0 a 6.97 6.97 0 1 0 -13.95 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.33 12.00 a 8.67 8.67 0 1 0 17.34 0 a 8.67 8.67 0 1 0 -17.34 0"
      }
    ]
  ]
};

export const KleptoSaber = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.81 12.00 a 2.19 2.19 0 1 0 4.38 0 a 2.19 2.19 0 1 0 -4.38 0" />
      <path d="M 8.31 12.00 a 3.69 3.69 0 1 0 7.39 0 a 3.69 3.69 0 1 0 -7.39 0" />
      <path d="M 6.41 12.00 a 5.59 5.59 0 1 0 11.18 0 a 5.59 5.59 0 1 0 -11.18 0" />
      <path d="M 5.03 12.00 a 6.97 6.97 0 1 0 13.95 0 a 6.97 6.97 0 1 0 -13.95 0" />
      <path d="M 3.33 12.00 a 8.67 8.67 0 1 0 17.34 0 a 8.67 8.67 0 1 0 -17.34 0" />
      {children}
    </svg>
  );
});

export default KleptoSaber;
