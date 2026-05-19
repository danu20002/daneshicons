import React from 'react';

export const iconData = {
  "id": "AudioVeteran",
  "name": "AudioVeteran",
  "category": "EB",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.04 6.60 L 20.96 6.60 L 20.96 17.40 L 3.04 17.40 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.04 6.60 L 7.01 2.63 L 24.93 2.63 L 20.96 6.60"
      }
    ],
    [
      "path",
      {
        "d": "M 20.96 6.60 L 24.93 2.63 L 24.93 13.43 L 20.96 17.40"
      }
    ]
  ]
};

export const AudioVeteran = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.04 6.60 L 20.96 6.60 L 20.96 17.40 L 3.04 17.40 Z" />
      <path d="M 3.04 6.60 L 7.01 2.63 L 24.93 2.63 L 20.96 6.60" />
      <path d="M 20.96 6.60 L 24.93 2.63 L 24.93 13.43 L 20.96 17.40" />
      {children}
    </svg>
  );
});

export default AudioVeteran;
