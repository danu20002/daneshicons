import React from 'react';

export const iconData = {
  "id": "AudioClay",
  "name": "AudioClay",
  "category": "ZI",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.85 9.92 L 18.23 18.63 L 9.37 20.71 L 3.15 14.08 L 5.77 5.37 L 14.63 3.29 Z"
      }
    ]
  ]
};

export const AudioClay = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.85 9.92 L 18.23 18.63 L 9.37 20.71 L 3.15 14.08 L 5.77 5.37 L 14.63 3.29 Z" />
      {children}
    </svg>
  );
});

export default AudioClay;
