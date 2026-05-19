import React from 'react';

export const iconData = {
  "id": "VegliaMeasure",
  "name": "VegliaMeasure",
  "category": "TE",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.52 12.00 Q 15.65 12.98 19.38 16.26"
      }
    ],
    [
      "path",
      {
        "d": "M 19.38 16.26 Q 14.67 14.67 16.26 19.38"
      }
    ],
    [
      "path",
      {
        "d": "M 16.26 19.38 Q 12.98 15.65 12.00 20.52"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.52 Q 11.02 15.65 7.74 19.38"
      }
    ],
    [
      "path",
      {
        "d": "M 7.74 19.38 Q 9.33 14.67 4.62 16.26"
      }
    ],
    [
      "path",
      {
        "d": "M 4.62 16.26 Q 8.35 12.98 3.48 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.48 12.00 Q 8.35 11.02 4.62 7.74"
      }
    ],
    [
      "path",
      {
        "d": "M 4.62 7.74 Q 9.33 9.33 7.74 4.62"
      }
    ],
    [
      "path",
      {
        "d": "M 7.74 4.62 Q 11.02 8.35 12.00 3.48"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.48 Q 12.98 8.35 16.26 4.62"
      }
    ],
    [
      "path",
      {
        "d": "M 16.26 4.62 Q 14.67 9.33 19.38 7.74"
      }
    ],
    [
      "path",
      {
        "d": "M 19.38 7.74 Q 15.65 11.02 20.52 12.00"
      }
    ]
  ]
};

export const VegliaMeasure = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.52 12.00 Q 15.65 12.98 19.38 16.26" />
      <path d="M 19.38 16.26 Q 14.67 14.67 16.26 19.38" />
      <path d="M 16.26 19.38 Q 12.98 15.65 12.00 20.52" />
      <path d="M 12.00 20.52 Q 11.02 15.65 7.74 19.38" />
      <path d="M 7.74 19.38 Q 9.33 14.67 4.62 16.26" />
      <path d="M 4.62 16.26 Q 8.35 12.98 3.48 12.00" />
      <path d="M 3.48 12.00 Q 8.35 11.02 4.62 7.74" />
      <path d="M 4.62 7.74 Q 9.33 9.33 7.74 4.62" />
      <path d="M 7.74 4.62 Q 11.02 8.35 12.00 3.48" />
      <path d="M 12.00 3.48 Q 12.98 8.35 16.26 4.62" />
      <path d="M 16.26 4.62 Q 14.67 9.33 19.38 7.74" />
      <path d="M 19.38 7.74 Q 15.65 11.02 20.52 12.00" />
      {children}
    </svg>
  );
});

export default VegliaMeasure;
