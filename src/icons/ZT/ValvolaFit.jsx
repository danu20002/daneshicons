import React from 'react';

export const iconData = {
  "id": "ValvolaFit",
  "name": "ValvolaFit",
  "category": "ZT",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.06 10.28 L 10.06 10.28"
      }
    ],
    [
      "path",
      {
        "d": "M 11.80 5.82 L 13.03 9.63"
      }
    ],
    [
      "path",
      {
        "d": "M 17.81 9.90 L 14.58 12.25"
      }
    ],
    [
      "path",
      {
        "d": "M 15.79 16.88 L 12.56 14.53"
      }
    ],
    [
      "path",
      {
        "d": "M 8.53 17.12 L 9.77 13.31"
      }
    ]
  ]
};

export const ValvolaFit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.06 10.28 L 10.06 10.28" />
      <path d="M 11.80 5.82 L 13.03 9.63" />
      <path d="M 17.81 9.90 L 14.58 12.25" />
      <path d="M 15.79 16.88 L 12.56 14.53" />
      <path d="M 8.53 17.12 L 9.77 13.31" />
      {children}
    </svg>
  );
});

export default ValvolaFit;
