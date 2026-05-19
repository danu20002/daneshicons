import React from 'react';

export const iconData = {
  "id": "AudioRetreat",
  "name": "AudioRetreat",
  "category": "FN",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.45 6.59 L 20.55 6.59 L 20.55 17.41 L 3.45 17.41 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.45 6.59 L 7.13 2.91 L 24.23 2.91 L 20.55 6.59"
      }
    ],
    [
      "path",
      {
        "d": "M 20.55 6.59 L 24.23 2.91 L 24.23 13.73 L 20.55 17.41"
      }
    ]
  ]
};

export const AudioRetreat = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.45 6.59 L 20.55 6.59 L 20.55 17.41 L 3.45 17.41 Z" />
      <path d="M 3.45 6.59 L 7.13 2.91 L 24.23 2.91 L 20.55 6.59" />
      <path d="M 20.55 6.59 L 24.23 2.91 L 24.23 13.73 L 20.55 17.41" />
      {children}
    </svg>
  );
});

export default AudioRetreat;
