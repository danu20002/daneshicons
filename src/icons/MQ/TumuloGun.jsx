import React from 'react';

export const iconData = {
  "id": "TumuloGun",
  "name": "TumuloGun",
  "category": "MQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.34 10.96 A 6.97 2.90 138 0 0 14.96 9.88"
      }
    ],
    [
      "path",
      {
        "d": "M 21.18 9.67 L 15.58 2.92"
      }
    ],
    [
      "path",
      {
        "d": "M 19.17 3.95 Q 11.30 8.61 20.47 10.50"
      }
    ],
    [
      "path",
      {
        "d": "M 4.71 3.34 C 17.34 14.40, 3.02 16.67, 19.52 12.99"
      }
    ],
    [
      "path",
      {
        "d": "M 21.48 15.16 Q 5.12 14.79 11.04 13.19"
      }
    ]
  ]
};

export const TumuloGun = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.34 10.96 A 6.97 2.90 138 0 0 14.96 9.88" />
      <path d="M 21.18 9.67 L 15.58 2.92" />
      <path d="M 19.17 3.95 Q 11.30 8.61 20.47 10.50" />
      <path d="M 4.71 3.34 C 17.34 14.40, 3.02 16.67, 19.52 12.99" />
      <path d="M 21.48 15.16 Q 5.12 14.79 11.04 13.19" />
      {children}
    </svg>
  );
});

export default TumuloGun;
