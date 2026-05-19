import React from 'react';

export const iconData = {
  "id": "AudioConvoy",
  "name": "AudioConvoy",
  "category": "SR",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.22 6.61 L 19.78 6.61 L 19.78 17.39 L 4.22 17.39 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.22 6.61 L 7.23 3.59 L 22.80 3.59 L 19.78 6.61"
      }
    ],
    [
      "path",
      {
        "d": "M 19.78 6.61 L 22.80 3.59 L 22.80 14.38 L 19.78 17.39"
      }
    ]
  ]
};

export const AudioConvoy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.22 6.61 L 19.78 6.61 L 19.78 17.39 L 4.22 17.39 Z" />
      <path d="M 4.22 6.61 L 7.23 3.59 L 22.80 3.59 L 19.78 6.61" />
      <path d="M 19.78 6.61 L 22.80 3.59 L 22.80 14.38 L 19.78 17.39" />
      {children}
    </svg>
  );
});

export default AudioConvoy;
