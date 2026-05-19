import React from 'react';

export const iconData = {
  "id": "ValutaParent",
  "name": "ValutaParent",
  "category": "UX",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.98 12.00 a 8.02 8.02 0 1 0 16.04 0 a 8.02 8.02 0 1 0 -16.04 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.88 12.00 a 5.12 5.12 0 1 1 10.24 0 a 5.12 5.12 0 1 1 -10.24 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.52 12.00 L 21.52 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.32 17.32 L 18.73 18.73"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.52 L 12.00 21.52"
      }
    ],
    [
      "path",
      {
        "d": "M 6.68 17.32 L 5.27 18.73"
      }
    ],
    [
      "path",
      {
        "d": "M 4.48 12.00 L 2.48 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.68 6.68 L 5.27 5.27"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.48 L 12.00 2.48"
      }
    ],
    [
      "path",
      {
        "d": "M 17.32 6.68 L 18.73 5.27"
      }
    ]
  ]
};

export const ValutaParent = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.98 12.00 a 8.02 8.02 0 1 0 16.04 0 a 8.02 8.02 0 1 0 -16.04 0" />
      <path d="M 6.88 12.00 a 5.12 5.12 0 1 1 10.24 0 a 5.12 5.12 0 1 1 -10.24 0" />
      <path d="M 19.52 12.00 L 21.52 12.00" />
      <path d="M 17.32 17.32 L 18.73 18.73" />
      <path d="M 12.00 19.52 L 12.00 21.52" />
      <path d="M 6.68 17.32 L 5.27 18.73" />
      <path d="M 4.48 12.00 L 2.48 12.00" />
      <path d="M 6.68 6.68 L 5.27 5.27" />
      <path d="M 12.00 4.48 L 12.00 2.48" />
      <path d="M 17.32 6.68 L 18.73 5.27" />
      {children}
    </svg>
  );
});

export default ValutaParent;
