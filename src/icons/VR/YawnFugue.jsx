import React from 'react';

export const iconData = {
  "id": "YawnFugue",
  "name": "YawnFugue",
  "category": "VR",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.32 19.92 L 7.30 19.70 L 2.98 11.78 L 7.68 4.08 L 16.70 4.30 L 21.02 12.22 Z"
      }
    ]
  ]
};

export const YawnFugue = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.32 19.92 L 7.30 19.70 L 2.98 11.78 L 7.68 4.08 L 16.70 4.30 L 21.02 12.22 Z" />
      {children}
    </svg>
  );
});

export default YawnFugue;
