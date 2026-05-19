import React from 'react';

export const iconData = {
  "id": "CentriDispute",
  "name": "CentriDispute",
  "category": "DJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.55 12.00 a 7.45 7.45 0 1 0 14.91 0 a 7.45 7.45 0 1 0 -14.91 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.46 12.00 a 4.54 4.54 0 1 1 9.08 0 a 4.54 4.54 0 1 1 -9.08 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.95 12.00 L 20.95 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.33 16.47 L 18.86 17.75"
      }
    ],
    [
      "path",
      {
        "d": "M 13.21 18.85 L 13.55 20.82"
      }
    ],
    [
      "path",
      {
        "d": "M 8.52 18.02 L 7.52 19.75"
      }
    ],
    [
      "path",
      {
        "d": "M 5.47 14.38 L 3.59 15.06"
      }
    ],
    [
      "path",
      {
        "d": "M 5.47 9.62 L 3.59 8.94"
      }
    ],
    [
      "path",
      {
        "d": "M 8.52 5.98 L 7.52 4.25"
      }
    ],
    [
      "path",
      {
        "d": "M 13.21 5.15 L 13.55 3.18"
      }
    ],
    [
      "path",
      {
        "d": "M 17.33 7.53 L 18.86 6.25"
      }
    ]
  ]
};

export const CentriDispute = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.55 12.00 a 7.45 7.45 0 1 0 14.91 0 a 7.45 7.45 0 1 0 -14.91 0" />
      <path d="M 7.46 12.00 a 4.54 4.54 0 1 1 9.08 0 a 4.54 4.54 0 1 1 -9.08 0" />
      <path d="M 18.95 12.00 L 20.95 12.00" />
      <path d="M 17.33 16.47 L 18.86 17.75" />
      <path d="M 13.21 18.85 L 13.55 20.82" />
      <path d="M 8.52 18.02 L 7.52 19.75" />
      <path d="M 5.47 14.38 L 3.59 15.06" />
      <path d="M 5.47 9.62 L 3.59 8.94" />
      <path d="M 8.52 5.98 L 7.52 4.25" />
      <path d="M 13.21 5.15 L 13.55 3.18" />
      <path d="M 17.33 7.53 L 18.86 6.25" />
      {children}
    </svg>
  );
});

export default CentriDispute;
