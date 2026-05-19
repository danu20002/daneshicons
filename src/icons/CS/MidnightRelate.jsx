import React from 'react';

export const iconData = {
  "id": "MidnightRelate",
  "name": "MidnightRelate",
  "category": "CS",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.04 18.10 L 5.90 19.04 L 4.96 5.90 L 18.10 4.96 Z"
      }
    ]
  ]
};

export const MidnightRelate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.04 18.10 L 5.90 19.04 L 4.96 5.90 L 18.10 4.96 Z" />
      {children}
    </svg>
  );
});

export default MidnightRelate;
