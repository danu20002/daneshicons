import React from 'react';

export const iconData = {
  "id": "PavoTriumph",
  "name": "PavoTriumph",
  "category": "TY",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.67 12.15 Q 6.25 4.68 16.53 2.07"
      }
    ],
    [
      "path",
      {
        "d": "M 4.03 14.47 L 7.48 12.98 L 17.03 18.84 L 20.93 17.00 L 8.33 5.91 L 16.73 5.30"
      }
    ],
    [
      "path",
      {
        "d": "M 21.49 18.16 C 18.87 14.13, 20.81 2.16, 9.13 9.04"
      }
    ],
    [
      "path",
      {
        "d": "M 17.70 4.07 A 6.60 3.54 79 0 1 9.68 13.33"
      }
    ],
    [
      "path",
      {
        "d": "M 6.74 14.66 L 16.13 2.94 L 17.11 7.28 L 8.62 17.19 L 21.58 3.26"
      }
    ],
    [
      "path",
      {
        "d": "M 3.38 13.55 C 20.27 11.37, 6.30 3.88, 12.30 6.78"
      }
    ]
  ]
};

export const PavoTriumph = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.67 12.15 Q 6.25 4.68 16.53 2.07" />
      <path d="M 4.03 14.47 L 7.48 12.98 L 17.03 18.84 L 20.93 17.00 L 8.33 5.91 L 16.73 5.30" />
      <path d="M 21.49 18.16 C 18.87 14.13, 20.81 2.16, 9.13 9.04" />
      <path d="M 17.70 4.07 A 6.60 3.54 79 0 1 9.68 13.33" />
      <path d="M 6.74 14.66 L 16.13 2.94 L 17.11 7.28 L 8.62 17.19 L 21.58 3.26" />
      <path d="M 3.38 13.55 C 20.27 11.37, 6.30 3.88, 12.30 6.78" />
      {children}
    </svg>
  );
});

export default PavoTriumph;
