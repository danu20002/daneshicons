import React from 'react';

export const iconData = {
  "id": "YepPursue",
  "name": "YepPursue",
  "category": "WO",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.37 19.90 L 10.65 16.68 L 4.10 16.37 L 7.32 10.65 L 7.63 4.10 L 13.35 7.32 L 19.90 7.63 L 16.68 13.35 Z"
      }
    ]
  ]
};

export const YepPursue = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.37 19.90 L 10.65 16.68 L 4.10 16.37 L 7.32 10.65 L 7.63 4.10 L 13.35 7.32 L 19.90 7.63 L 16.68 13.35 Z" />
      {children}
    </svg>
  );
});

export default YepPursue;
