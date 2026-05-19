import React from 'react';

export const iconData = {
  "id": "SummoNip",
  "name": "SummoNip",
  "category": "IZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.67 19.71 L 20.10 9.53"
      }
    ],
    [
      "path",
      {
        "d": "M 7.66 11.98 Q 5.56 13.91 16.23 21.22"
      }
    ],
    [
      "path",
      {
        "d": "M 4.43 2.63 C 19.93 14.03, 21.29 18.88, 8.75 10.56"
      }
    ],
    [
      "path",
      {
        "d": "M 11.14 11.75 L 15.18 5.12 L 9.91 15.93 L 18.18 19.92 L 16.53 19.41"
      }
    ],
    [
      "path",
      {
        "d": "M 12.49 8.77 L 19.50 6.06"
      }
    ],
    [
      "path",
      {
        "d": "M 7.73 7.02 C 15.15 10.80, 9.99 12.05, 3.81 4.38"
      }
    ]
  ]
};

export const SummoNip = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.67 19.71 L 20.10 9.53" />
      <path d="M 7.66 11.98 Q 5.56 13.91 16.23 21.22" />
      <path d="M 4.43 2.63 C 19.93 14.03, 21.29 18.88, 8.75 10.56" />
      <path d="M 11.14 11.75 L 15.18 5.12 L 9.91 15.93 L 18.18 19.92 L 16.53 19.41" />
      <path d="M 12.49 8.77 L 19.50 6.06" />
      <path d="M 7.73 7.02 C 15.15 10.80, 9.99 12.05, 3.81 4.38" />
      {children}
    </svg>
  );
});

export default SummoNip;
