import React from 'react';

export const iconData = {
  "id": "KappaSentence",
  "name": "KappaSentence",
  "category": "ZG",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.86 6.26 L 19.14 6.26 L 19.14 17.74 L 4.86 17.74 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.86 6.26 L 8.63 2.48 L 22.92 2.48 L 19.14 6.26"
      }
    ],
    [
      "path",
      {
        "d": "M 19.14 6.26 L 22.92 2.48 L 22.92 13.96 L 19.14 17.74"
      }
    ]
  ]
};

export const KappaSentence = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.86 6.26 L 19.14 6.26 L 19.14 17.74 L 4.86 17.74 Z" />
      <path d="M 4.86 6.26 L 8.63 2.48 L 22.92 2.48 L 19.14 6.26" />
      <path d="M 19.14 6.26 L 22.92 2.48 L 22.92 13.96 L 19.14 17.74" />
      {children}
    </svg>
  );
});

export default KappaSentence;
