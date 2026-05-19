import React from 'react';

export const iconData = {
  "id": "MycoDungeon",
  "name": "MycoDungeon",
  "category": "YP",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.67 3.29 L 19.38 7.36 L 19.71 16.07 L 12.33 20.71 L 4.62 16.64 L 4.29 7.93 Z"
      }
    ]
  ]
};

export const MycoDungeon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.67 3.29 L 19.38 7.36 L 19.71 16.07 L 12.33 20.71 L 4.62 16.64 L 4.29 7.93 Z" />
      {children}
    </svg>
  );
});

export default MycoDungeon;
