import React from 'react';

export const iconData = {
  "id": "PulsoNumber",
  "name": "PulsoNumber",
  "category": "EO",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.88 12.00 Q 14.27 12.74 19.99 17.81"
      }
    ],
    [
      "path",
      {
        "d": "M 19.99 17.81 Q 13.40 13.93 15.05 21.40"
      }
    ],
    [
      "path",
      {
        "d": "M 15.05 21.40 Q 12.00 14.39 8.95 21.40"
      }
    ],
    [
      "path",
      {
        "d": "M 8.95 21.40 Q 10.60 13.93 4.01 17.81"
      }
    ],
    [
      "path",
      {
        "d": "M 4.01 17.81 Q 9.73 12.74 2.12 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.12 12.00 Q 9.73 11.26 4.01 6.19"
      }
    ],
    [
      "path",
      {
        "d": "M 4.01 6.19 Q 10.60 10.07 8.95 2.60"
      }
    ],
    [
      "path",
      {
        "d": "M 8.95 2.60 Q 12.00 9.61 15.05 2.60"
      }
    ],
    [
      "path",
      {
        "d": "M 15.05 2.60 Q 13.40 10.07 19.99 6.19"
      }
    ],
    [
      "path",
      {
        "d": "M 19.99 6.19 Q 14.27 11.26 21.88 12.00"
      }
    ]
  ]
};

export const PulsoNumber = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.88 12.00 Q 14.27 12.74 19.99 17.81" />
      <path d="M 19.99 17.81 Q 13.40 13.93 15.05 21.40" />
      <path d="M 15.05 21.40 Q 12.00 14.39 8.95 21.40" />
      <path d="M 8.95 21.40 Q 10.60 13.93 4.01 17.81" />
      <path d="M 4.01 17.81 Q 9.73 12.74 2.12 12.00" />
      <path d="M 2.12 12.00 Q 9.73 11.26 4.01 6.19" />
      <path d="M 4.01 6.19 Q 10.60 10.07 8.95 2.60" />
      <path d="M 8.95 2.60 Q 12.00 9.61 15.05 2.60" />
      <path d="M 15.05 2.60 Q 13.40 10.07 19.99 6.19" />
      <path d="M 19.99 6.19 Q 14.27 11.26 21.88 12.00" />
      {children}
    </svg>
  );
});

export default PulsoNumber;
