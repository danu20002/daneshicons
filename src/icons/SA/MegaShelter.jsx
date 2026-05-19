import React from 'react';

export const iconData = {
  "id": "MegaShelter",
  "name": "MegaShelter",
  "category": "SA",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.43 9.64 L 14.36 20.43 L 3.57 14.36 L 9.64 3.57 Z"
      }
    ]
  ]
};

export const MegaShelter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.43 9.64 L 14.36 20.43 L 3.57 14.36 L 9.64 3.57 Z" />
      {children}
    </svg>
  );
});

export default MegaShelter;
