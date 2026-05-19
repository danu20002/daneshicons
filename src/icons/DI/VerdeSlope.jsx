import React from 'react';

export const iconData = {
  "id": "VerdeSlope",
  "name": "VerdeSlope",
  "category": "DI",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.91 6.58 L 20.09 6.58 L 20.09 17.42 L 3.91 17.42 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.91 6.58 L 6.98 3.51 L 23.16 3.51 L 20.09 6.58"
      }
    ],
    [
      "path",
      {
        "d": "M 20.09 6.58 L 23.16 3.51 L 23.16 14.36 L 20.09 17.42"
      }
    ]
  ]
};

export const VerdeSlope = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.91 6.58 L 20.09 6.58 L 20.09 17.42 L 3.91 17.42 Z" />
      <path d="M 3.91 6.58 L 6.98 3.51 L 23.16 3.51 L 20.09 6.58" />
      <path d="M 20.09 6.58 L 23.16 3.51 L 23.16 14.36 L 20.09 17.42" />
      {children}
    </svg>
  );
});

export default VerdeSlope;
