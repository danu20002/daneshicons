import React from 'react';

export const iconData = {
  "id": "SpheroPluto",
  "name": "SpheroPluto",
  "category": "RX",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.14 12.00 a 9.86 9.86 0 1 0 19.73 0 a 9.86 9.86 0 1 0 -19.73 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.11 6.08 a 7.89 2.3675026358664035 0 1 0 15.78 0 a 7.89 2.3675026358664035 0 1 0 -15.78 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.33 10.03 a 9.67 2.8995867112834466 0 1 0 19.33 0 a 9.67 2.8995867112834466 0 1 0 -19.33 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.33 13.97 a 9.67 2.8995867112834466 0 1 0 19.33 0 a 9.67 2.8995867112834466 0 1 0 -19.33 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.11 17.92 a 7.89 2.367502635866403 0 1 0 15.78 0 a 7.89 2.367502635866403 0 1 0 -15.78 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.14 A 2 2 0 0 0 12.00 21.86"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.14 A 2 2 0 0 1 12.00 21.86"
      }
    ]
  ]
};

export const SpheroPluto = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.14 12.00 a 9.86 9.86 0 1 0 19.73 0 a 9.86 9.86 0 1 0 -19.73 0" />
      <path d="M 4.11 6.08 a 7.89 2.3675026358664035 0 1 0 15.78 0 a 7.89 2.3675026358664035 0 1 0 -15.78 0" />
      <path d="M 2.33 10.03 a 9.67 2.8995867112834466 0 1 0 19.33 0 a 9.67 2.8995867112834466 0 1 0 -19.33 0" />
      <path d="M 2.33 13.97 a 9.67 2.8995867112834466 0 1 0 19.33 0 a 9.67 2.8995867112834466 0 1 0 -19.33 0" />
      <path d="M 4.11 17.92 a 7.89 2.367502635866403 0 1 0 15.78 0 a 7.89 2.367502635866403 0 1 0 -15.78 0" />
      <path d="M 12.00 2.14 A 2 2 0 0 0 12.00 21.86" />
      <path d="M 12.00 2.14 A 2 2 0 0 1 12.00 21.86" />
      {children}
    </svg>
  );
});

export default SpheroPluto;
