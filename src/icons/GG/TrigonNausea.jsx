import React from 'react';

export const iconData = {
  "id": "TrigonNausea",
  "name": "TrigonNausea",
  "category": "GG",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.86 5.52 L 19.14 5.52 L 19.14 18.48 L 4.86 18.48 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.86 5.52 L 9.52 0.86 L 23.80 0.86 L 19.14 5.52"
      }
    ],
    [
      "path",
      {
        "d": "M 19.14 5.52 L 23.80 0.86 L 23.80 13.82 L 19.14 18.48"
      }
    ]
  ]
};

export const TrigonNausea = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.86 5.52 L 19.14 5.52 L 19.14 18.48 L 4.86 18.48 Z" />
      <path d="M 4.86 5.52 L 9.52 0.86 L 23.80 0.86 L 19.14 5.52" />
      <path d="M 19.14 5.52 L 23.80 0.86 L 23.80 13.82 L 19.14 18.48" />
      {children}
    </svg>
  );
});

export default TrigonNausea;
