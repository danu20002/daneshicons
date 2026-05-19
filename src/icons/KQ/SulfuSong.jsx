import React from 'react';

export const iconData = {
  "id": "SulfuSong",
  "name": "SulfuSong",
  "category": "KQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.46 6.13 L 19.54 6.13 L 19.54 17.87 L 4.46 17.87 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.46 6.13 L 7.88 2.71 L 22.97 2.71 L 19.54 6.13"
      }
    ],
    [
      "path",
      {
        "d": "M 19.54 6.13 L 22.97 2.71 L 22.97 14.45 L 19.54 17.87"
      }
    ]
  ]
};

export const SulfuSong = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.46 6.13 L 19.54 6.13 L 19.54 17.87 L 4.46 17.87 Z" />
      <path d="M 4.46 6.13 L 7.88 2.71 L 22.97 2.71 L 19.54 6.13" />
      <path d="M 19.54 6.13 L 22.97 2.71 L 22.97 14.45 L 19.54 17.87" />
      {children}
    </svg>
  );
});

export default SulfuSong;
