import React from 'react';

export const iconData = {
  "id": "VindiceLegend",
  "name": "VindiceLegend",
  "category": "YI",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.96 13.86 L 13.68 13.45"
      }
    ],
    [
      "path",
      {
        "d": "M 20.69 18.98 A 4.26 5.17 23 0 1 10.77 7.06"
      }
    ],
    [
      "path",
      {
        "d": "M 14.51 7.23 L 5.52 3.00 L 8.84 8.09 L 17.98 4.15 L 17.92 4.30"
      }
    ],
    [
      "path",
      {
        "d": "M 19.80 5.10 Q 11.85 19.13 19.19 6.04"
      }
    ]
  ]
};

export const VindiceLegend = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.96 13.86 L 13.68 13.45" />
      <path d="M 20.69 18.98 A 4.26 5.17 23 0 1 10.77 7.06" />
      <path d="M 14.51 7.23 L 5.52 3.00 L 8.84 8.09 L 17.98 4.15 L 17.92 4.30" />
      <path d="M 19.80 5.10 Q 11.85 19.13 19.19 6.04" />
      {children}
    </svg>
  );
});

export default VindiceLegend;
