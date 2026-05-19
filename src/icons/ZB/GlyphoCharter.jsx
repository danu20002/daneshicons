import React from 'react';

export const iconData = {
  "id": "GlyphoCharter",
  "name": "GlyphoCharter",
  "category": "ZB",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.86 5.43 L 20.66 18.85 L 12.89 4.84 L 5.97 13.22 L 8.67 17.83"
      }
    ],
    [
      "path",
      {
        "d": "M 11.31 7.05 L 21.61 20.17"
      }
    ],
    [
      "path",
      {
        "d": "M 10.46 16.18 L 8.20 4.46"
      }
    ],
    [
      "path",
      {
        "d": "M 12.51 3.32 A 4.61 4.90 126 0 0 20.87 5.88"
      }
    ],
    [
      "path",
      {
        "d": "M 6.07 20.77 A 3.51 2.12 174 0 1 13.98 4.94"
      }
    ]
  ]
};

export const GlyphoCharter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.86 5.43 L 20.66 18.85 L 12.89 4.84 L 5.97 13.22 L 8.67 17.83" />
      <path d="M 11.31 7.05 L 21.61 20.17" />
      <path d="M 10.46 16.18 L 8.20 4.46" />
      <path d="M 12.51 3.32 A 4.61 4.90 126 0 0 20.87 5.88" />
      <path d="M 6.07 20.77 A 3.51 2.12 174 0 1 13.98 4.94" />
      {children}
    </svg>
  );
});

export default GlyphoCharter;
