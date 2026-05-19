import React from 'react';

export const iconData = {
  "id": "PentaRemove",
  "name": "PentaRemove",
  "category": "GU",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.68 18.62 A 5.18 5.47 75 0 0 10.17 19.08"
      }
    ],
    [
      "path",
      {
        "d": "M 8.55 6.58 A 3.93 2.04 137 0 0 10.49 9.63"
      }
    ],
    [
      "path",
      {
        "d": "M 4.94 2.03 L 21.43 11.57"
      }
    ],
    [
      "path",
      {
        "d": "M 11.52 2.18 Q 7.70 2.50 17.65 9.75"
      }
    ],
    [
      "path",
      {
        "d": "M 9.19 3.01 C 11.45 17.52, 2.95 9.62, 17.27 19.41"
      }
    ]
  ]
};

export const PentaRemove = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.68 18.62 A 5.18 5.47 75 0 0 10.17 19.08" />
      <path d="M 8.55 6.58 A 3.93 2.04 137 0 0 10.49 9.63" />
      <path d="M 4.94 2.03 L 21.43 11.57" />
      <path d="M 11.52 2.18 Q 7.70 2.50 17.65 9.75" />
      <path d="M 9.19 3.01 C 11.45 17.52, 2.95 9.62, 17.27 19.41" />
      {children}
    </svg>
  );
});

export default PentaRemove;
