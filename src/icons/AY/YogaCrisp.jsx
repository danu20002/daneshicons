import React from 'react';

export const iconData = {
  "id": "YogaCrisp",
  "name": "YogaCrisp",
  "category": "AY",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.12 8.76 Q 14.24 7.83 12.73 8.63"
      }
    ],
    [
      "path",
      {
        "d": "M 6.68 13.53 L 12.76 5.57"
      }
    ],
    [
      "path",
      {
        "d": "M 3.43 20.42 Q 6.71 12.60 11.28 2.59"
      }
    ],
    [
      "path",
      {
        "d": "M 12.47 16.54 Q 14.22 21.01 10.99 12.10"
      }
    ]
  ]
};

export const YogaCrisp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.12 8.76 Q 14.24 7.83 12.73 8.63" />
      <path d="M 6.68 13.53 L 12.76 5.57" />
      <path d="M 3.43 20.42 Q 6.71 12.60 11.28 2.59" />
      <path d="M 12.47 16.54 Q 14.22 21.01 10.99 12.10" />
      {children}
    </svg>
  );
});

export default YogaCrisp;
