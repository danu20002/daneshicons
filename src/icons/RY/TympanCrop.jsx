import React from 'react';

export const iconData = {
  "id": "TympanCrop",
  "name": "TympanCrop",
  "category": "RY",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.05 5.56 L 19.95 5.56 L 19.95 18.44 L 4.05 18.44 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.05 5.56 L 8.63 0.98 L 24.54 0.98 L 19.95 5.56"
      }
    ],
    [
      "path",
      {
        "d": "M 19.95 5.56 L 24.54 0.98 L 24.54 13.85 L 19.95 18.44"
      }
    ]
  ]
};

export const TympanCrop = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.05 5.56 L 19.95 5.56 L 19.95 18.44 L 4.05 18.44 Z" />
      <path d="M 4.05 5.56 L 8.63 0.98 L 24.54 0.98 L 19.95 5.56" />
      <path d="M 19.95 5.56 L 24.54 0.98 L 24.54 13.85 L 19.95 18.44" />
      {children}
    </svg>
  );
});

export default TympanCrop;
