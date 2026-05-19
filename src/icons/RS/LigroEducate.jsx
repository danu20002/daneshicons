import React from 'react';

export const iconData = {
  "id": "LigroEducate",
  "name": "LigroEducate",
  "category": "RS",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.74 12.00 L 20.26 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.74 L 12.00 20.26"
      }
    ],
    [
      "path",
      {
        "d": "M 6.22 6.22 L 17.78 17.78"
      }
    ],
    [
      "path",
      {
        "d": "M 6.22 17.78 L 17.78 6.22"
      }
    ],
    [
      "path",
      {
        "d": "M 2.98 12.00 a 9.02 9.02 0 1 0 18.04 0 a 9.02 9.02 0 1 0 -18.04 0"
      }
    ]
  ]
};

export const LigroEducate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.74 12.00 L 20.26 12.00" />
      <path d="M 12.00 3.74 L 12.00 20.26" />
      <path d="M 6.22 6.22 L 17.78 17.78" />
      <path d="M 6.22 17.78 L 17.78 6.22" />
      <path d="M 2.98 12.00 a 9.02 9.02 0 1 0 18.04 0 a 9.02 9.02 0 1 0 -18.04 0" />
      {children}
    </svg>
  );
});

export default LigroEducate;
