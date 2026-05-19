import React from 'react';

export const iconData = {
  "id": "VoluttMast",
  "name": "VoluttMast",
  "category": "VK",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.53 20.63 C 15.08 20.50, 19.64 14.88, 7.48 16.84"
      }
    ],
    [
      "path",
      {
        "d": "M 12.99 9.86 A 3.91 6.36 122 0 1 16.82 16.86"
      }
    ],
    [
      "path",
      {
        "d": "M 4.98 14.46 L 12.54 8.86 L 22.00 15.88 L 19.85 21.29 L 15.81 12.23 L 16.56 18.51 L 18.18 5.22 L 20.37 18.43"
      }
    ],
    [
      "path",
      {
        "d": "M 14.40 13.83 Q 4.00 18.95 11.19 12.61"
      }
    ],
    [
      "path",
      {
        "d": "M 16.54 8.25 A 5.43 5.43 10 0 1 9.36 3.25"
      }
    ],
    [
      "path",
      {
        "d": "M 12.90 10.63 L 20.34 15.13"
      }
    ]
  ]
};

export const VoluttMast = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.53 20.63 C 15.08 20.50, 19.64 14.88, 7.48 16.84" />
      <path d="M 12.99 9.86 A 3.91 6.36 122 0 1 16.82 16.86" />
      <path d="M 4.98 14.46 L 12.54 8.86 L 22.00 15.88 L 19.85 21.29 L 15.81 12.23 L 16.56 18.51 L 18.18 5.22 L 20.37 18.43" />
      <path d="M 14.40 13.83 Q 4.00 18.95 11.19 12.61" />
      <path d="M 16.54 8.25 A 5.43 5.43 10 0 1 9.36 3.25" />
      <path d="M 12.90 10.63 L 20.34 15.13" />
      {children}
    </svg>
  );
});

export default VoluttMast;
