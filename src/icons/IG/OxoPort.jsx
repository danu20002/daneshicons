import React from 'react';

export const iconData = {
  "id": "OxoPort",
  "name": "OxoPort",
  "category": "IG",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.58 8.61 L 15.78 7.76"
      }
    ],
    [
      "path",
      {
        "d": "M 8.68 2.84 L 5.37 2.78 L 9.48 12.69 L 15.97 8.94 L 14.18 4.69 L 9.33 4.87 L 13.19 17.85 L 9.14 17.23"
      }
    ],
    [
      "path",
      {
        "d": "M 10.89 12.07 Q 6.27 4.29 15.50 17.99"
      }
    ],
    [
      "path",
      {
        "d": "M 10.45 7.82 C 9.67 7.29, 6.63 9.03, 17.04 19.77"
      }
    ]
  ]
};

export const OxoPort = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.58 8.61 L 15.78 7.76" />
      <path d="M 8.68 2.84 L 5.37 2.78 L 9.48 12.69 L 15.97 8.94 L 14.18 4.69 L 9.33 4.87 L 13.19 17.85 L 9.14 17.23" />
      <path d="M 10.89 12.07 Q 6.27 4.29 15.50 17.99" />
      <path d="M 10.45 7.82 C 9.67 7.29, 6.63 9.03, 17.04 19.77" />
      {children}
    </svg>
  );
});

export default OxoPort;
