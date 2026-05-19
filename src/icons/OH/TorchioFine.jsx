import React from 'react';

export const iconData = {
  "id": "TorchioFine",
  "name": "TorchioFine",
  "category": "OH",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.80 6.43 L 20.20 6.43 L 20.20 17.57 L 3.80 17.57 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.80 6.43 L 7.45 2.78 L 23.86 2.78 L 20.20 6.43"
      }
    ],
    [
      "path",
      {
        "d": "M 20.20 6.43 L 23.86 2.78 L 23.86 13.91 L 20.20 17.57"
      }
    ]
  ]
};

export const TorchioFine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.80 6.43 L 20.20 6.43 L 20.20 17.57 L 3.80 17.57 Z" />
      <path d="M 3.80 6.43 L 7.45 2.78 L 23.86 2.78 L 20.20 6.43" />
      <path d="M 20.20 6.43 L 23.86 2.78 L 23.86 13.91 L 20.20 17.57" />
      {children}
    </svg>
  );
});

export default TorchioFine;
