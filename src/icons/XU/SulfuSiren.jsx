import React from 'react';

export const iconData = {
  "id": "SulfuSiren",
  "name": "SulfuSiren",
  "category": "XU",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.16 6.16 L 19.84 6.16 L 19.84 17.84 L 4.16 17.84 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.16 6.16 L 9.08 1.24 L 24.77 1.24 L 19.84 6.16"
      }
    ],
    [
      "path",
      {
        "d": "M 19.84 6.16 L 24.77 1.24 L 24.77 12.91 L 19.84 17.84"
      }
    ]
  ]
};

export const SulfuSiren = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.16 6.16 L 19.84 6.16 L 19.84 17.84 L 4.16 17.84 Z" />
      <path d="M 4.16 6.16 L 9.08 1.24 L 24.77 1.24 L 19.84 6.16" />
      <path d="M 19.84 6.16 L 24.77 1.24 L 24.77 12.91 L 19.84 17.84" />
      {children}
    </svg>
  );
});

export default SulfuSiren;
