import React from 'react';

export const iconData = {
  "id": "TimbroPerfect",
  "name": "TimbroPerfect",
  "category": "NI",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.30 12.00 Q 13.92 12.62 18.72 16.88"
      }
    ],
    [
      "path",
      {
        "d": "M 18.72 16.88 Q 13.19 13.63 14.57 19.90"
      }
    ],
    [
      "path",
      {
        "d": "M 14.57 19.90 Q 12.00 14.02 9.43 19.90"
      }
    ],
    [
      "path",
      {
        "d": "M 9.43 19.90 Q 10.81 13.63 5.28 16.88"
      }
    ],
    [
      "path",
      {
        "d": "M 5.28 16.88 Q 10.08 12.62 3.70 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.70 12.00 Q 10.08 11.38 5.28 7.12"
      }
    ],
    [
      "path",
      {
        "d": "M 5.28 7.12 Q 10.81 10.37 9.43 4.10"
      }
    ],
    [
      "path",
      {
        "d": "M 9.43 4.10 Q 12.00 9.98 14.57 4.10"
      }
    ],
    [
      "path",
      {
        "d": "M 14.57 4.10 Q 13.19 10.37 18.72 7.12"
      }
    ],
    [
      "path",
      {
        "d": "M 18.72 7.12 Q 13.92 11.38 20.30 12.00"
      }
    ]
  ]
};

export const TimbroPerfect = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.30 12.00 Q 13.92 12.62 18.72 16.88" />
      <path d="M 18.72 16.88 Q 13.19 13.63 14.57 19.90" />
      <path d="M 14.57 19.90 Q 12.00 14.02 9.43 19.90" />
      <path d="M 9.43 19.90 Q 10.81 13.63 5.28 16.88" />
      <path d="M 5.28 16.88 Q 10.08 12.62 3.70 12.00" />
      <path d="M 3.70 12.00 Q 10.08 11.38 5.28 7.12" />
      <path d="M 5.28 7.12 Q 10.81 10.37 9.43 4.10" />
      <path d="M 9.43 4.10 Q 12.00 9.98 14.57 4.10" />
      <path d="M 14.57 4.10 Q 13.19 10.37 18.72 7.12" />
      <path d="M 18.72 7.12 Q 13.92 11.38 20.30 12.00" />
      {children}
    </svg>
  );
});

export default TimbroPerfect;
