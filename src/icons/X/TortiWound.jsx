import React from 'react';

export const iconData = {
  "id": "TortiWound",
  "name": "TortiWound",
  "category": "X",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.18 22.56 L 9.86 14.22 L 1.44 12.18 L 9.78 9.86 L 11.82 1.44 L 14.14 9.78 L 22.56 11.82 L 14.22 14.14 Z"
      }
    ]
  ]
};

export const TortiWound = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.18 22.56 L 9.86 14.22 L 1.44 12.18 L 9.78 9.86 L 11.82 1.44 L 14.14 9.78 L 22.56 11.82 L 14.22 14.14 Z" />
      {children}
    </svg>
  );
});

export default TortiWound;
