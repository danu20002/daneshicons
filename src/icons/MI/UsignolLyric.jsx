import React from 'react';

export const iconData = {
  "id": "UsignolLyric",
  "name": "UsignolLyric",
  "category": "MI",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.82 5.85 L 10.91 7.43 L 15.63 3.27 L 16.01 9.55 L 21.42 12.76 L 15.57 15.06 L 14.19 21.20 L 10.19 16.34 L 3.93 16.92 L 7.31 11.62 Z"
      }
    ]
  ]
};

export const UsignolLyric = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.82 5.85 L 10.91 7.43 L 15.63 3.27 L 16.01 9.55 L 21.42 12.76 L 15.57 15.06 L 14.19 21.20 L 10.19 16.34 L 3.93 16.92 L 7.31 11.62 Z" />
      {children}
    </svg>
  );
});

export default UsignolLyric;
