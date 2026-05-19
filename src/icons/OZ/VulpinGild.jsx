import React from 'react';

export const iconData = {
  "id": "VulpinGild",
  "name": "VulpinGild",
  "category": "OZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.20 12.00 a 8.80 8.80 0 1 0 17.59 0 a 8.80 8.80 0 1 0 -17.59 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.20 12.00 a 8.80 2.6387926648836584 0 1 0 17.59 0 a 8.80 2.6387926648836584 0 1 0 -17.59 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.40 4.38 A 2 2 0 0 0 16.40 19.62"
      }
    ],
    [
      "path",
      {
        "d": "M 16.40 4.38 A 2 2 0 0 1 16.40 19.62"
      }
    ],
    [
      "path",
      {
        "d": "M 7.60 4.38 A 2 2 0 0 0 7.60 19.62"
      }
    ],
    [
      "path",
      {
        "d": "M 7.60 4.38 A 2 2 0 0 1 7.60 19.62"
      }
    ]
  ]
};

export const VulpinGild = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.20 12.00 a 8.80 8.80 0 1 0 17.59 0 a 8.80 8.80 0 1 0 -17.59 0" />
      <path d="M 3.20 12.00 a 8.80 2.6387926648836584 0 1 0 17.59 0 a 8.80 2.6387926648836584 0 1 0 -17.59 0" />
      <path d="M 16.40 4.38 A 2 2 0 0 0 16.40 19.62" />
      <path d="M 16.40 4.38 A 2 2 0 0 1 16.40 19.62" />
      <path d="M 7.60 4.38 A 2 2 0 0 0 7.60 19.62" />
      <path d="M 7.60 4.38 A 2 2 0 0 1 7.60 19.62" />
      {children}
    </svg>
  );
});

export default VulpinGild;
