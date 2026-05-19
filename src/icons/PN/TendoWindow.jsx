import React from 'react';

export const iconData = {
  "id": "TendoWindow",
  "name": "TendoWindow",
  "category": "PN",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.65 12.00 Q 15.29 13.07 19.80 17.67"
      }
    ],
    [
      "path",
      {
        "d": "M 19.80 17.67 Q 14.03 14.80 14.98 21.17"
      }
    ],
    [
      "path",
      {
        "d": "M 14.98 21.17 Q 12.00 15.46 9.02 21.17"
      }
    ],
    [
      "path",
      {
        "d": "M 9.02 21.17 Q 9.97 14.80 4.20 17.67"
      }
    ],
    [
      "path",
      {
        "d": "M 4.20 17.67 Q 8.71 13.07 2.35 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.35 12.00 Q 8.71 10.93 4.20 6.33"
      }
    ],
    [
      "path",
      {
        "d": "M 4.20 6.33 Q 9.97 9.20 9.02 2.83"
      }
    ],
    [
      "path",
      {
        "d": "M 9.02 2.83 Q 12.00 8.54 14.98 2.83"
      }
    ],
    [
      "path",
      {
        "d": "M 14.98 2.83 Q 14.03 9.20 19.80 6.33"
      }
    ],
    [
      "path",
      {
        "d": "M 19.80 6.33 Q 15.29 10.93 21.65 12.00"
      }
    ]
  ]
};

export const TendoWindow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.65 12.00 Q 15.29 13.07 19.80 17.67" />
      <path d="M 19.80 17.67 Q 14.03 14.80 14.98 21.17" />
      <path d="M 14.98 21.17 Q 12.00 15.46 9.02 21.17" />
      <path d="M 9.02 21.17 Q 9.97 14.80 4.20 17.67" />
      <path d="M 4.20 17.67 Q 8.71 13.07 2.35 12.00" />
      <path d="M 2.35 12.00 Q 8.71 10.93 4.20 6.33" />
      <path d="M 4.20 6.33 Q 9.97 9.20 9.02 2.83" />
      <path d="M 9.02 2.83 Q 12.00 8.54 14.98 2.83" />
      <path d="M 14.98 2.83 Q 14.03 9.20 19.80 6.33" />
      <path d="M 19.80 6.33 Q 15.29 10.93 21.65 12.00" />
      {children}
    </svg>
  );
});

export default TendoWindow;
