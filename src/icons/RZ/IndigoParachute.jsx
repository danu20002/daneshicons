import React from 'react';

export const iconData = {
  "id": "IndigoParachute",
  "name": "IndigoParachute",
  "category": "RZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.27 12.00 a 7.73 7.73 0 1 0 15.45 0 a 7.73 7.73 0 1 0 -15.45 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.46 12.00 a 5.54 5.54 0 1 1 11.08 0 a 5.54 5.54 0 1 1 -11.08 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.23 12.00 L 21.23 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.54 16.64 L 19.07 17.93"
      }
    ],
    [
      "path",
      {
        "d": "M 13.25 19.12 L 13.60 21.09"
      }
    ],
    [
      "path",
      {
        "d": "M 8.39 18.26 L 7.39 19.99"
      }
    ],
    [
      "path",
      {
        "d": "M 5.21 14.47 L 3.33 15.16"
      }
    ],
    [
      "path",
      {
        "d": "M 5.21 9.53 L 3.33 8.84"
      }
    ],
    [
      "path",
      {
        "d": "M 8.39 5.74 L 7.39 4.01"
      }
    ],
    [
      "path",
      {
        "d": "M 13.25 4.88 L 13.60 2.91"
      }
    ],
    [
      "path",
      {
        "d": "M 17.54 7.36 L 19.07 6.07"
      }
    ]
  ]
};

export const IndigoParachute = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.27 12.00 a 7.73 7.73 0 1 0 15.45 0 a 7.73 7.73 0 1 0 -15.45 0" />
      <path d="M 6.46 12.00 a 5.54 5.54 0 1 1 11.08 0 a 5.54 5.54 0 1 1 -11.08 0" />
      <path d="M 19.23 12.00 L 21.23 12.00" />
      <path d="M 17.54 16.64 L 19.07 17.93" />
      <path d="M 13.25 19.12 L 13.60 21.09" />
      <path d="M 8.39 18.26 L 7.39 19.99" />
      <path d="M 5.21 14.47 L 3.33 15.16" />
      <path d="M 5.21 9.53 L 3.33 8.84" />
      <path d="M 8.39 5.74 L 7.39 4.01" />
      <path d="M 13.25 4.88 L 13.60 2.91" />
      <path d="M 17.54 7.36 L 19.07 6.07" />
      {children}
    </svg>
  );
});

export default IndigoParachute;
