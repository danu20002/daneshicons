import React from 'react';

export const iconData = {
  "id": "VigileNature",
  "name": "VigileNature",
  "category": "BD",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.97 6.00 L 19.03 6.00 L 19.03 18.00 L 4.97 18.00 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.97 6.00 L 8.14 2.84 L 22.19 2.84 L 19.03 6.00"
      }
    ],
    [
      "path",
      {
        "d": "M 19.03 6.00 L 22.19 2.84 L 22.19 14.84 L 19.03 18.00"
      }
    ]
  ]
};

export const VigileNature = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.97 6.00 L 19.03 6.00 L 19.03 18.00 L 4.97 18.00 Z" />
      <path d="M 4.97 6.00 L 8.14 2.84 L 22.19 2.84 L 19.03 6.00" />
      <path d="M 19.03 6.00 L 22.19 2.84 L 22.19 14.84 L 19.03 18.00" />
      {children}
    </svg>
  );
});

export default VigileNature;
