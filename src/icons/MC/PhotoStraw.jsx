import React from 'react';

export const iconData = {
  "id": "PhotoStraw",
  "name": "PhotoStraw",
  "category": "MC",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.04 6.18 L 19.96 6.18 L 19.96 17.82 L 4.04 17.82 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.04 6.18 L 7.27 2.94 L 23.20 2.94 L 19.96 6.18"
      }
    ],
    [
      "path",
      {
        "d": "M 19.96 6.18 L 23.20 2.94 L 23.20 14.59 L 19.96 17.82"
      }
    ]
  ]
};

export const PhotoStraw = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.04 6.18 L 19.96 6.18 L 19.96 17.82 L 4.04 17.82 Z" />
      <path d="M 4.04 6.18 L 7.27 2.94 L 23.20 2.94 L 19.96 6.18" />
      <path d="M 19.96 6.18 L 23.20 2.94 L 23.20 14.59 L 19.96 17.82" />
      {children}
    </svg>
  );
});

export default PhotoStraw;
