import React from 'react';

export const iconData = {
  "id": "FusioShore",
  "name": "FusioShore",
  "category": "RF",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.79 5.18 L 19.21 5.18 L 19.21 18.82 L 4.79 18.82 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.79 5.18 L 8.61 1.35 L 23.04 1.35 L 19.21 5.18"
      }
    ],
    [
      "path",
      {
        "d": "M 19.21 5.18 L 23.04 1.35 L 23.04 14.99 L 19.21 18.82"
      }
    ]
  ]
};

export const FusioShore = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.79 5.18 L 19.21 5.18 L 19.21 18.82 L 4.79 18.82 Z" />
      <path d="M 4.79 5.18 L 8.61 1.35 L 23.04 1.35 L 19.21 5.18" />
      <path d="M 19.21 5.18 L 23.04 1.35 L 23.04 14.99 L 19.21 18.82" />
      {children}
    </svg>
  );
});

export default FusioShore;
