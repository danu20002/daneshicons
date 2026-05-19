import React from 'react';

export const iconData = {
  "id": "SestoProspect",
  "name": "SestoProspect",
  "category": "HA",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.70 12.00 a 7.30 7.30 0 1 0 14.61 0 a 7.30 7.30 0 1 0 -14.61 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.46 12.00 a 4.54 4.54 0 1 1 9.07 0 a 4.54 4.54 0 1 1 -9.07 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.80 12.00 L 20.80 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.24 17.32 L 17.49 18.88"
      }
    ],
    [
      "path",
      {
        "d": "M 10.49 18.63 L 10.04 20.58"
      }
    ],
    [
      "path",
      {
        "d": "M 5.87 14.95 L 4.07 15.82"
      }
    ],
    [
      "path",
      {
        "d": "M 5.87 9.05 L 4.07 8.18"
      }
    ],
    [
      "path",
      {
        "d": "M 10.49 5.37 L 10.04 3.42"
      }
    ],
    [
      "path",
      {
        "d": "M 16.24 6.68 L 17.49 5.12"
      }
    ]
  ]
};

export const SestoProspect = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.70 12.00 a 7.30 7.30 0 1 0 14.61 0 a 7.30 7.30 0 1 0 -14.61 0" />
      <path d="M 7.46 12.00 a 4.54 4.54 0 1 1 9.07 0 a 4.54 4.54 0 1 1 -9.07 0" />
      <path d="M 18.80 12.00 L 20.80 12.00" />
      <path d="M 16.24 17.32 L 17.49 18.88" />
      <path d="M 10.49 18.63 L 10.04 20.58" />
      <path d="M 5.87 14.95 L 4.07 15.82" />
      <path d="M 5.87 9.05 L 4.07 8.18" />
      <path d="M 10.49 5.37 L 10.04 3.42" />
      <path d="M 16.24 6.68 L 17.49 5.12" />
      {children}
    </svg>
  );
});

export default SestoProspect;
