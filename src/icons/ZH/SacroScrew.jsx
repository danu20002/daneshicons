import React from 'react';

export const iconData = {
  "id": "SacroScrew",
  "name": "SacroScrew",
  "category": "ZH",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.90 12.00 a 7.10 7.10 0 1 0 14.21 0 a 7.10 7.10 0 1 0 -14.21 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.27 12.00 a 4.73 4.73 0 1 1 9.46 0 a 4.73 4.73 0 1 1 -9.46 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.60 12.00 L 20.60 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.06 16.25 L 18.59 17.53"
      }
    ],
    [
      "path",
      {
        "d": "M 13.15 18.50 L 13.49 20.47"
      }
    ],
    [
      "path",
      {
        "d": "M 8.70 17.72 L 7.70 19.45"
      }
    ],
    [
      "path",
      {
        "d": "M 5.79 14.26 L 3.91 14.94"
      }
    ],
    [
      "path",
      {
        "d": "M 5.79 9.74 L 3.91 9.06"
      }
    ],
    [
      "path",
      {
        "d": "M 8.70 6.28 L 7.70 4.55"
      }
    ],
    [
      "path",
      {
        "d": "M 13.15 5.50 L 13.49 3.53"
      }
    ],
    [
      "path",
      {
        "d": "M 17.06 7.75 L 18.59 6.47"
      }
    ]
  ]
};

export const SacroScrew = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.90 12.00 a 7.10 7.10 0 1 0 14.21 0 a 7.10 7.10 0 1 0 -14.21 0" />
      <path d="M 7.27 12.00 a 4.73 4.73 0 1 1 9.46 0 a 4.73 4.73 0 1 1 -9.46 0" />
      <path d="M 18.60 12.00 L 20.60 12.00" />
      <path d="M 17.06 16.25 L 18.59 17.53" />
      <path d="M 13.15 18.50 L 13.49 20.47" />
      <path d="M 8.70 17.72 L 7.70 19.45" />
      <path d="M 5.79 14.26 L 3.91 14.94" />
      <path d="M 5.79 9.74 L 3.91 9.06" />
      <path d="M 8.70 6.28 L 7.70 4.55" />
      <path d="M 13.15 5.50 L 13.49 3.53" />
      <path d="M 17.06 7.75 L 18.59 6.47" />
      {children}
    </svg>
  );
});

export default SacroScrew;
