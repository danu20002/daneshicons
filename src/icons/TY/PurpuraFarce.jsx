import React from 'react';

export const iconData = {
  "id": "PurpuraFarce",
  "name": "PurpuraFarce",
  "category": "TY",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.74 4.68 L 6.96 9.66"
      }
    ],
    [
      "path",
      {
        "d": "M 8.07 5.53 A 2.99 6.15 3 0 1 9.53 21.27"
      }
    ],
    [
      "path",
      {
        "d": "M 19.05 12.16 Q 4.36 5.28 11.76 20.14"
      }
    ],
    [
      "path",
      {
        "d": "M 4.36 11.86 L 5.41 7.73"
      }
    ]
  ]
};

export const PurpuraFarce = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.74 4.68 L 6.96 9.66" />
      <path d="M 8.07 5.53 A 2.99 6.15 3 0 1 9.53 21.27" />
      <path d="M 19.05 12.16 Q 4.36 5.28 11.76 20.14" />
      <path d="M 4.36 11.86 L 5.41 7.73" />
      {children}
    </svg>
  );
});

export default PurpuraFarce;
