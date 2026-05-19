import React from 'react';

export const iconData = {
  "id": "AudioCrunch",
  "name": "AudioCrunch",
  "category": "MI",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.09 18.95 L 8.27 12.90 L 3.57 8.53 L 9.99 8.74 L 12.70 2.91 L 14.48 9.08 L 20.86 9.85 L 15.54 13.46 L 16.78 19.77 L 11.71 15.82 Z"
      }
    ]
  ]
};

export const AudioCrunch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.09 18.95 L 8.27 12.90 L 3.57 8.53 L 9.99 8.74 L 12.70 2.91 L 14.48 9.08 L 20.86 9.85 L 15.54 13.46 L 16.78 19.77 L 11.71 15.82 Z" />
      {children}
    </svg>
  );
});

export default AudioCrunch;
