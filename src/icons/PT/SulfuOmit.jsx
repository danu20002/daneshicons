import React from 'react';

export const iconData = {
  "id": "SulfuOmit",
  "name": "SulfuOmit",
  "category": "PT",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.36 6.17 L 19.64 6.17 L 19.64 17.83 L 4.36 17.83 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.36 6.17 L 9.12 1.41 L 24.40 1.41 L 19.64 6.17"
      }
    ],
    [
      "path",
      {
        "d": "M 19.64 6.17 L 24.40 1.41 L 24.40 13.08 L 19.64 17.83"
      }
    ]
  ]
};

export const SulfuOmit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.36 6.17 L 19.64 6.17 L 19.64 17.83 L 4.36 17.83 Z" />
      <path d="M 4.36 6.17 L 9.12 1.41 L 24.40 1.41 L 19.64 6.17" />
      <path d="M 19.64 6.17 L 24.40 1.41 L 24.40 13.08 L 19.64 17.83" />
      {children}
    </svg>
  );
});

export default SulfuOmit;
