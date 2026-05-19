import React from 'react';

export const iconData = {
  "id": "VigoreFifth",
  "name": "VigoreFifth",
  "category": "NI",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.94 12.00 Q 14.58 12.84 20.04 17.84"
      }
    ],
    [
      "path",
      {
        "d": "M 20.04 17.84 Q 13.60 14.20 15.07 21.46"
      }
    ],
    [
      "path",
      {
        "d": "M 15.07 21.46 Q 12.00 14.72 8.93 21.46"
      }
    ],
    [
      "path",
      {
        "d": "M 8.93 21.46 Q 10.40 14.20 3.96 17.84"
      }
    ],
    [
      "path",
      {
        "d": "M 3.96 17.84 Q 9.42 12.84 2.06 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.06 12.00 Q 9.42 11.16 3.96 6.16"
      }
    ],
    [
      "path",
      {
        "d": "M 3.96 6.16 Q 10.40 9.80 8.93 2.54"
      }
    ],
    [
      "path",
      {
        "d": "M 8.93 2.54 Q 12.00 9.28 15.07 2.54"
      }
    ],
    [
      "path",
      {
        "d": "M 15.07 2.54 Q 13.60 9.80 20.04 6.16"
      }
    ],
    [
      "path",
      {
        "d": "M 20.04 6.16 Q 14.58 11.16 21.94 12.00"
      }
    ]
  ]
};

export const VigoreFifth = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.94 12.00 Q 14.58 12.84 20.04 17.84" />
      <path d="M 20.04 17.84 Q 13.60 14.20 15.07 21.46" />
      <path d="M 15.07 21.46 Q 12.00 14.72 8.93 21.46" />
      <path d="M 8.93 21.46 Q 10.40 14.20 3.96 17.84" />
      <path d="M 3.96 17.84 Q 9.42 12.84 2.06 12.00" />
      <path d="M 2.06 12.00 Q 9.42 11.16 3.96 6.16" />
      <path d="M 3.96 6.16 Q 10.40 9.80 8.93 2.54" />
      <path d="M 8.93 2.54 Q 12.00 9.28 15.07 2.54" />
      <path d="M 15.07 2.54 Q 13.60 9.80 20.04 6.16" />
      <path d="M 20.04 6.16 Q 14.58 11.16 21.94 12.00" />
      {children}
    </svg>
  );
});

export default VigoreFifth;
