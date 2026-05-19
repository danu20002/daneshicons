import React from 'react';

export const iconData = {
  "id": "OleoClamp",
  "name": "OleoClamp",
  "category": "AK",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.84 6.18 L 19.16 6.18 L 19.16 17.82 L 4.84 17.82 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.84 6.18 L 8.59 2.44 L 22.90 2.44 L 19.16 6.18"
      }
    ],
    [
      "path",
      {
        "d": "M 19.16 6.18 L 22.90 2.44 L 22.90 14.08 L 19.16 17.82"
      }
    ]
  ]
};

export const OleoClamp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.84 6.18 L 19.16 6.18 L 19.16 17.82 L 4.84 17.82 Z" />
      <path d="M 4.84 6.18 L 8.59 2.44 L 22.90 2.44 L 19.16 6.18" />
      <path d="M 19.16 6.18 L 22.90 2.44 L 22.90 14.08 L 19.16 17.82" />
      {children}
    </svg>
  );
});

export default OleoClamp;
