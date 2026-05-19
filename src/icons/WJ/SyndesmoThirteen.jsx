import React from 'react';

export const iconData = {
  "id": "SyndesmoThirteen",
  "name": "SyndesmoThirteen",
  "category": "WJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.48 12.00 a 7.52 7.52 0 1 0 15.04 0 a 7.52 7.52 0 1 0 -15.04 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.43 12.00 a 5.57 5.57 0 1 1 11.15 0 a 5.57 5.57 0 1 1 -11.15 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.02 12.00 L 21.02 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.90 15.79 L 19.59 16.88"
      }
    ],
    [
      "path",
      {
        "d": "M 14.92 18.38 L 15.75 20.20"
      }
    ],
    [
      "path",
      {
        "d": "M 11.00 18.95 L 10.72 20.93"
      }
    ],
    [
      "path",
      {
        "d": "M 7.40 17.30 L 6.09 18.82"
      }
    ],
    [
      "path",
      {
        "d": "M 5.27 13.98 L 3.35 14.54"
      }
    ],
    [
      "path",
      {
        "d": "M 5.27 10.02 L 3.35 9.46"
      }
    ],
    [
      "path",
      {
        "d": "M 7.40 6.70 L 6.09 5.18"
      }
    ],
    [
      "path",
      {
        "d": "M 11.00 5.05 L 10.72 3.07"
      }
    ],
    [
      "path",
      {
        "d": "M 14.92 5.62 L 15.75 3.80"
      }
    ],
    [
      "path",
      {
        "d": "M 17.90 8.21 L 19.59 7.12"
      }
    ]
  ]
};

export const SyndesmoThirteen = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.48 12.00 a 7.52 7.52 0 1 0 15.04 0 a 7.52 7.52 0 1 0 -15.04 0" />
      <path d="M 6.43 12.00 a 5.57 5.57 0 1 1 11.15 0 a 5.57 5.57 0 1 1 -11.15 0" />
      <path d="M 19.02 12.00 L 21.02 12.00" />
      <path d="M 17.90 15.79 L 19.59 16.88" />
      <path d="M 14.92 18.38 L 15.75 20.20" />
      <path d="M 11.00 18.95 L 10.72 20.93" />
      <path d="M 7.40 17.30 L 6.09 18.82" />
      <path d="M 5.27 13.98 L 3.35 14.54" />
      <path d="M 5.27 10.02 L 3.35 9.46" />
      <path d="M 7.40 6.70 L 6.09 5.18" />
      <path d="M 11.00 5.05 L 10.72 3.07" />
      <path d="M 14.92 5.62 L 15.75 3.80" />
      <path d="M 17.90 8.21 L 19.59 7.12" />
      {children}
    </svg>
  );
});

export default SyndesmoThirteen;
