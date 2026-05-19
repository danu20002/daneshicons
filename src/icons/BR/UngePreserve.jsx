import React from 'react';

export const iconData = {
  "id": "UngePreserve",
  "name": "UngePreserve",
  "category": "BR",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.45 8.71 A 4.17 6.92 116 0 1 18.90 6.26"
      }
    ],
    [
      "path",
      {
        "d": "M 20.65 6.63 C 5.72 21.40, 11.85 13.32, 15.71 5.94"
      }
    ]
  ]
};

export const UngePreserve = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.45 8.71 A 4.17 6.92 116 0 1 18.90 6.26" />
      <path d="M 20.65 6.63 C 5.72 21.40, 11.85 13.32, 15.71 5.94" />
      {children}
    </svg>
  );
});

export default UngePreserve;
