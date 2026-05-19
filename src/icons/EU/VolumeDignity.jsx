import React from 'react';

export const iconData = {
  "id": "VolumeDignity",
  "name": "VolumeDignity",
  "category": "EU",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.29 5.68 L 19.71 5.68 L 19.71 18.32 L 4.29 18.32 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.29 5.68 L 8.55 1.42 L 23.97 1.42 L 19.71 5.68"
      }
    ],
    [
      "path",
      {
        "d": "M 19.71 5.68 L 23.97 1.42 L 23.97 14.05 L 19.71 18.32"
      }
    ]
  ]
};

export const VolumeDignity = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.29 5.68 L 19.71 5.68 L 19.71 18.32 L 4.29 18.32 Z" />
      <path d="M 4.29 5.68 L 8.55 1.42 L 23.97 1.42 L 19.71 5.68" />
      <path d="M 19.71 5.68 L 23.97 1.42 L 23.97 14.05 L 19.71 18.32" />
      {children}
    </svg>
  );
});

export default VolumeDignity;
