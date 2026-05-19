import React from 'react';

export const iconData = {
  "id": "ZerbinoSong",
  "name": "ZerbinoSong",
  "category": "X",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.16 20.90 L 8.05 13.49 L 1.73 9.20 L 9.36 8.71 L 11.49 1.36 L 14.31 8.47 L 21.96 8.23 L 16.07 13.11 L 18.66 20.31 L 12.20 16.21 Z"
      }
    ]
  ]
};

export const ZerbinoSong = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.16 20.90 L 8.05 13.49 L 1.73 9.20 L 9.36 8.71 L 11.49 1.36 L 14.31 8.47 L 21.96 8.23 L 16.07 13.11 L 18.66 20.31 L 12.20 16.21 Z" />
      {children}
    </svg>
  );
});

export default ZerbinoSong;
