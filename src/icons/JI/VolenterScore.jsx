import React from 'react';

export const iconData = {
  "id": "VolenterScore",
  "name": "VolenterScore",
  "category": "JI",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.59 14.72 L 3.42 7.28 L 9.28 2.59 L 16.72 3.42 L 21.41 9.28 L 20.58 16.72 L 14.72 21.41 L 7.28 20.58 Z"
      }
    ]
  ]
};

export const VolenterScore = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.59 14.72 L 3.42 7.28 L 9.28 2.59 L 16.72 3.42 L 21.41 9.28 L 20.58 16.72 L 14.72 21.41 L 7.28 20.58 Z" />
      {children}
    </svg>
  );
});

export default VolenterScore;
