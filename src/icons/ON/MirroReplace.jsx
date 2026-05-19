import React from 'react';

export const iconData = {
  "id": "MirroReplace",
  "name": "MirroReplace",
  "category": "ON",
  "nodes": [
    [
      "path",
      {
        "d": "M 22.69 14.48 L 15.05 16.89 L 9.52 22.69 L 7.11 15.05 L 1.31 9.52 L 8.95 7.11 L 14.48 1.31 L 16.89 8.95 Z"
      }
    ]
  ]
};

export const MirroReplace = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 22.69 14.48 L 15.05 16.89 L 9.52 22.69 L 7.11 15.05 L 1.31 9.52 L 8.95 7.11 L 14.48 1.31 L 16.89 8.95 Z" />
      {children}
    </svg>
  );
});

export default MirroReplace;
