import React from 'react';

export const iconData = {
  "id": "TorchioLiana",
  "name": "TorchioLiana",
  "category": "NO",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.64 6.68 L 19.36 6.68 L 19.36 17.32 L 4.64 17.32 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.64 6.68 L 7.67 3.65 L 22.39 3.65 L 19.36 6.68"
      }
    ],
    [
      "path",
      {
        "d": "M 19.36 6.68 L 22.39 3.65 L 22.39 14.29 L 19.36 17.32"
      }
    ]
  ]
};

export const TorchioLiana = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.64 6.68 L 19.36 6.68 L 19.36 17.32 L 4.64 17.32 Z" />
      <path d="M 4.64 6.68 L 7.67 3.65 L 22.39 3.65 L 19.36 6.68" />
      <path d="M 19.36 6.68 L 22.39 3.65 L 22.39 14.29 L 19.36 17.32" />
      {children}
    </svg>
  );
});

export default TorchioLiana;
