import React from 'react';

export const iconData = {
  "id": "OxoSeries",
  "name": "OxoSeries",
  "category": "NJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.70 15.02 L 3.42 14.68 L 17.04 10.82"
      }
    ],
    [
      "path",
      {
        "d": "M 8.83 8.43 L 19.98 17.98 L 5.85 11.38 L 7.36 5.08"
      }
    ],
    [
      "path",
      {
        "d": "M 12.11 2.21 A 2.12 4.00 123 0 1 18.52 7.17"
      }
    ],
    [
      "path",
      {
        "d": "M 13.97 12.04 Q 15.80 8.11 9.23 12.81"
      }
    ]
  ]
};

export const OxoSeries = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.70 15.02 L 3.42 14.68 L 17.04 10.82" />
      <path d="M 8.83 8.43 L 19.98 17.98 L 5.85 11.38 L 7.36 5.08" />
      <path d="M 12.11 2.21 A 2.12 4.00 123 0 1 18.52 7.17" />
      <path d="M 13.97 12.04 Q 15.80 8.11 9.23 12.81" />
      {children}
    </svg>
  );
});

export default OxoSeries;
