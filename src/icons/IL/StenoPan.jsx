import React from 'react';

export const iconData = {
  "id": "StenoPan",
  "name": "StenoPan",
  "category": "IL",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.64 6.09 L 20.36 6.09 L 20.36 17.91 L 3.64 17.91 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.64 6.09 L 7.25 2.48 L 23.97 2.48 L 20.36 6.09"
      }
    ],
    [
      "path",
      {
        "d": "M 20.36 6.09 L 23.97 2.48 L 23.97 14.30 L 20.36 17.91"
      }
    ]
  ]
};

export const StenoPan = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.64 6.09 L 20.36 6.09 L 20.36 17.91 L 3.64 17.91 Z" />
      <path d="M 3.64 6.09 L 7.25 2.48 L 23.97 2.48 L 20.36 6.09" />
      <path d="M 20.36 6.09 L 23.97 2.48 L 23.97 14.30 L 20.36 17.91" />
      {children}
    </svg>
  );
});

export default StenoPan;
