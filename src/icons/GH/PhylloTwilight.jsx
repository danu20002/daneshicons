import React from 'react';

export const iconData = {
  "id": "PhylloTwilight",
  "name": "PhylloTwilight",
  "category": "GH",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.70 12.00 a 7.30 7.30 0 1 0 14.60 0 a 7.30 7.30 0 1 0 -14.60 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.55 12.00 a 4.45 4.45 0 1 1 8.91 0 a 4.45 4.45 0 1 1 -8.91 0"
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
        "d": "M 15.40 17.89 L 16.40 19.62"
      }
    ],
    [
      "path",
      {
        "d": "M 8.60 17.89 L 7.60 19.62"
      }
    ],
    [
      "path",
      {
        "d": "M 5.20 12.00 L 3.20 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.60 6.11 L 7.60 4.38"
      }
    ],
    [
      "path",
      {
        "d": "M 15.40 6.11 L 16.40 4.38"
      }
    ]
  ]
};

export const PhylloTwilight = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.70 12.00 a 7.30 7.30 0 1 0 14.60 0 a 7.30 7.30 0 1 0 -14.60 0" />
      <path d="M 7.55 12.00 a 4.45 4.45 0 1 1 8.91 0 a 4.45 4.45 0 1 1 -8.91 0" />
      <path d="M 18.80 12.00 L 20.80 12.00" />
      <path d="M 15.40 17.89 L 16.40 19.62" />
      <path d="M 8.60 17.89 L 7.60 19.62" />
      <path d="M 5.20 12.00 L 3.20 12.00" />
      <path d="M 8.60 6.11 L 7.60 4.38" />
      <path d="M 15.40 6.11 L 16.40 4.38" />
      {children}
    </svg>
  );
});

export default PhylloTwilight;
