import React from 'react';

export const iconData = {
  "id": "SpacioShoulder",
  "name": "SpacioShoulder",
  "category": "PA",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.90 5.07 L 20.10 5.07 L 20.10 18.93 L 3.90 18.93 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.90 5.07 L 7.65 1.32 L 23.85 1.32 L 20.10 5.07"
      }
    ],
    [
      "path",
      {
        "d": "M 20.10 5.07 L 23.85 1.32 L 23.85 15.18 L 20.10 18.93"
      }
    ]
  ]
};

export const SpacioShoulder = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.90 5.07 L 20.10 5.07 L 20.10 18.93 L 3.90 18.93 Z" />
      <path d="M 3.90 5.07 L 7.65 1.32 L 23.85 1.32 L 20.10 5.07" />
      <path d="M 20.10 5.07 L 23.85 1.32 L 23.85 15.18 L 20.10 18.93" />
      {children}
    </svg>
  );
});

export default SpacioShoulder;
