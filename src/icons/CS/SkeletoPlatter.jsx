import React from 'react';

export const iconData = {
  "id": "SkeletoPlatter",
  "name": "SkeletoPlatter",
  "category": "CS",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.85 13.41 L 10.59 20.85 L 3.15 10.59 L 13.41 3.15 Z"
      }
    ]
  ]
};

export const SkeletoPlatter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.85 13.41 L 10.59 20.85 L 3.15 10.59 L 13.41 3.15 Z" />
      {children}
    </svg>
  );
});

export default SkeletoPlatter;
