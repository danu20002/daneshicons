import React from 'react';

export const iconData = {
  "id": "StomatoSculpt",
  "name": "StomatoSculpt",
  "category": "KP",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.14 12.00 a 8.86 8.86 0 1 0 17.72 0 a 8.86 8.86 0 1 0 -17.72 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.33 7.57 a 7.67 2.3013381598313414 0 1 0 15.34 0 a 7.67 2.3013381598313414 0 1 0 -15.34 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.14 12.00 a 8.86 2.6573564121499658 0 1 0 17.72 0 a 8.86 2.6573564121499658 0 1 0 -17.72 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.33 16.43 a 7.67 2.3013381598313414 0 1 0 15.34 0 a 7.67 2.3013381598313414 0 1 0 -15.34 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.26 5.74 A 2 2 0 0 0 18.26 18.26"
      }
    ],
    [
      "path",
      {
        "d": "M 18.26 5.74 A 2 2 0 0 1 18.26 18.26"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.14 A 2 2 0 0 0 12.00 20.86"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.14 A 2 2 0 0 1 12.00 20.86"
      }
    ],
    [
      "path",
      {
        "d": "M 5.74 5.74 A 2 2 0 0 0 5.74 18.26"
      }
    ],
    [
      "path",
      {
        "d": "M 5.74 5.74 A 2 2 0 0 1 5.74 18.26"
      }
    ]
  ]
};

export const StomatoSculpt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.14 12.00 a 8.86 8.86 0 1 0 17.72 0 a 8.86 8.86 0 1 0 -17.72 0" />
      <path d="M 4.33 7.57 a 7.67 2.3013381598313414 0 1 0 15.34 0 a 7.67 2.3013381598313414 0 1 0 -15.34 0" />
      <path d="M 3.14 12.00 a 8.86 2.6573564121499658 0 1 0 17.72 0 a 8.86 2.6573564121499658 0 1 0 -17.72 0" />
      <path d="M 4.33 16.43 a 7.67 2.3013381598313414 0 1 0 15.34 0 a 7.67 2.3013381598313414 0 1 0 -15.34 0" />
      <path d="M 18.26 5.74 A 2 2 0 0 0 18.26 18.26" />
      <path d="M 18.26 5.74 A 2 2 0 0 1 18.26 18.26" />
      <path d="M 12.00 3.14 A 2 2 0 0 0 12.00 20.86" />
      <path d="M 12.00 3.14 A 2 2 0 0 1 12.00 20.86" />
      <path d="M 5.74 5.74 A 2 2 0 0 0 5.74 18.26" />
      <path d="M 5.74 5.74 A 2 2 0 0 1 5.74 18.26" />
      {children}
    </svg>
  );
});

export default StomatoSculpt;
