import React from 'react';

export const iconData = {
  "id": "PhleboFang",
  "name": "PhleboFang",
  "category": "UR",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.78 9.93 C 9.04 11.20, 8.71 5.72, 5.72 13.99"
      }
    ],
    [
      "path",
      {
        "d": "M 17.65 19.93 L 20.53 16.33"
      }
    ],
    [
      "path",
      {
        "d": "M 5.07 7.34 A 4.17 3.92 71 0 1 8.85 8.16"
      }
    ]
  ]
};

export const PhleboFang = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.78 9.93 C 9.04 11.20, 8.71 5.72, 5.72 13.99" />
      <path d="M 17.65 19.93 L 20.53 16.33" />
      <path d="M 5.07 7.34 A 4.17 3.92 71 0 1 8.85 8.16" />
      {children}
    </svg>
  );
});

export default PhleboFang;
