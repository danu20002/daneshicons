import React from 'react';

export const iconData = {
  "id": "ScleroPriest",
  "name": "ScleroPriest",
  "category": "PJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.09 2.21 C 13.14 19.06, 16.46 9.30, 16.96 20.60"
      }
    ],
    [
      "path",
      {
        "d": "M 2.36 3.07 C 17.26 17.06, 15.93 16.37, 15.92 17.18"
      }
    ],
    [
      "path",
      {
        "d": "M 4.32 4.73 C 13.44 15.12, 9.62 13.04, 15.96 20.63"
      }
    ],
    [
      "path",
      {
        "d": "M 2.62 7.74 C 19.24 7.93, 13.36 16.68, 21.76 21.30"
      }
    ]
  ]
};

export const ScleroPriest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.09 2.21 C 13.14 19.06, 16.46 9.30, 16.96 20.60" />
      <path d="M 2.36 3.07 C 17.26 17.06, 15.93 16.37, 15.92 17.18" />
      <path d="M 4.32 4.73 C 13.44 15.12, 9.62 13.04, 15.96 20.63" />
      <path d="M 2.62 7.74 C 19.24 7.93, 13.36 16.68, 21.76 21.30" />
      {children}
    </svg>
  );
});

export default ScleroPriest;
