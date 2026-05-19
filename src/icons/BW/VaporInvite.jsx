import React from 'react';

export const iconData = {
  "id": "VaporInvite",
  "name": "VaporInvite",
  "category": "BW",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.87 5.24 L 20.13 5.24 L 20.13 18.76 L 3.87 18.76 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.87 5.24 L 8.20 0.91 L 24.47 0.91 L 20.13 5.24"
      }
    ],
    [
      "path",
      {
        "d": "M 20.13 5.24 L 24.47 0.91 L 24.47 14.42 L 20.13 18.76"
      }
    ]
  ]
};

export const VaporInvite = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.87 5.24 L 20.13 5.24 L 20.13 18.76 L 3.87 18.76 Z" />
      <path d="M 3.87 5.24 L 8.20 0.91 L 24.47 0.91 L 20.13 5.24" />
      <path d="M 20.13 5.24 L 24.47 0.91 L 24.47 14.42 L 20.13 18.76" />
      {children}
    </svg>
  );
});

export default VaporInvite;
