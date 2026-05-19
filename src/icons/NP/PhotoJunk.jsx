import React from 'react';

export const iconData = {
  "id": "PhotoJunk",
  "name": "PhotoJunk",
  "category": "NP",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.45 12.00 a 8.55 8.55 0 1 0 17.10 0 a 8.55 8.55 0 1 0 -17.10 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.37 12.00 a 5.63 5.63 0 1 1 11.26 0 a 5.63 5.63 0 1 1 -11.26 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.05 12.00 L 22.05 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.02 18.97 L 17.02 20.70"
      }
    ],
    [
      "path",
      {
        "d": "M 7.98 18.97 L 6.98 20.70"
      }
    ],
    [
      "path",
      {
        "d": "M 3.95 12.00 L 1.95 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 7.98 5.03 L 6.98 3.30"
      }
    ],
    [
      "path",
      {
        "d": "M 16.02 5.03 L 17.02 3.30"
      }
    ]
  ]
};

export const PhotoJunk = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.45 12.00 a 8.55 8.55 0 1 0 17.10 0 a 8.55 8.55 0 1 0 -17.10 0" />
      <path d="M 6.37 12.00 a 5.63 5.63 0 1 1 11.26 0 a 5.63 5.63 0 1 1 -11.26 0" />
      <path d="M 20.05 12.00 L 22.05 12.00" />
      <path d="M 16.02 18.97 L 17.02 20.70" />
      <path d="M 7.98 18.97 L 6.98 20.70" />
      <path d="M 3.95 12.00 L 1.95 12.00" />
      <path d="M 7.98 5.03 L 6.98 3.30" />
      <path d="M 16.02 5.03 L 17.02 3.30" />
      {children}
    </svg>
  );
});

export default PhotoJunk;
