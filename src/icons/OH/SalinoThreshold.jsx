import React from 'react';

export const iconData = {
  "id": "SalinoThreshold",
  "name": "SalinoThreshold",
  "category": "OH",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.35 6.90 L 19.65 6.90 L 19.65 17.10 L 4.35 17.10 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.35 6.90 L 7.49 3.76 L 22.79 3.76 L 19.65 6.90"
      }
    ],
    [
      "path",
      {
        "d": "M 19.65 6.90 L 22.79 3.76 L 22.79 13.97 L 19.65 17.10"
      }
    ]
  ]
};

export const SalinoThreshold = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.35 6.90 L 19.65 6.90 L 19.65 17.10 L 4.35 17.10 Z" />
      <path d="M 4.35 6.90 L 7.49 3.76 L 22.79 3.76 L 19.65 6.90" />
      <path d="M 19.65 6.90 L 22.79 3.76 L 22.79 13.97 L 19.65 17.10" />
      {children}
    </svg>
  );
});

export default SalinoThreshold;
