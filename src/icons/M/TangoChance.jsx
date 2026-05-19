import React from 'react';

export const iconData = {
  "id": "TangoChance",
  "name": "TangoChance",
  "category": "M",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.20 18.22 Q 7.99 6.70 5.54 16.46"
      }
    ],
    [
      "path",
      {
        "d": "M 10.48 17.11 A 2.79 4.40 19 0 0 3.00 10.58"
      }
    ],
    [
      "path",
      {
        "d": "M 6.78 18.78 C 19.67 19.21, 12.65 10.66, 5.41 9.33"
      }
    ],
    [
      "path",
      {
        "d": "M 19.21 11.39 L 5.30 17.57 L 21.03 21.00 L 8.26 10.12 L 15.06 9.01 L 16.28 3.37 L 10.40 9.38"
      }
    ],
    [
      "path",
      {
        "d": "M 11.07 4.83 L 10.39 20.50 L 13.79 13.84 L 5.79 17.13 L 10.54 6.92 L 9.40 5.99"
      }
    ],
    [
      "path",
      {
        "d": "M 10.29 19.53 C 4.90 10.24, 9.38 7.65, 7.86 10.03"
      }
    ]
  ]
};

export const TangoChance = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.20 18.22 Q 7.99 6.70 5.54 16.46" />
      <path d="M 10.48 17.11 A 2.79 4.40 19 0 0 3.00 10.58" />
      <path d="M 6.78 18.78 C 19.67 19.21, 12.65 10.66, 5.41 9.33" />
      <path d="M 19.21 11.39 L 5.30 17.57 L 21.03 21.00 L 8.26 10.12 L 15.06 9.01 L 16.28 3.37 L 10.40 9.38" />
      <path d="M 11.07 4.83 L 10.39 20.50 L 13.79 13.84 L 5.79 17.13 L 10.54 6.92 L 9.40 5.99" />
      <path d="M 10.29 19.53 C 4.90 10.24, 9.38 7.65, 7.86 10.03" />
      {children}
    </svg>
  );
});

export default TangoChance;
