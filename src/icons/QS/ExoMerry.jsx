import React from 'react';

export const iconData = {
  "id": "ExoMerry",
  "name": "ExoMerry",
  "category": "QS",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.66 7.74 L 15.04 12.66 L 19.04 19.88 L 12.31 15.10 L 6.68 21.13 L 9.15 13.25 L 1.68 9.76 L 9.93 9.68 L 10.94 1.49 L 13.57 9.31 Z"
      }
    ]
  ]
};

export const ExoMerry = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.66 7.74 L 15.04 12.66 L 19.04 19.88 L 12.31 15.10 L 6.68 21.13 L 9.15 13.25 L 1.68 9.76 L 9.93 9.68 L 10.94 1.49 L 13.57 9.31 Z" />
      {children}
    </svg>
  );
});

export default ExoMerry;
