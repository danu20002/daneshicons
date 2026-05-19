import React from 'react';

export const iconData = {
  "id": "KataHighway",
  "name": "KataHighway",
  "category": "EE",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.60 20.47 L 7.85 19.83 L 3.53 14.60 L 4.17 7.85 L 9.40 3.53 L 16.15 4.17 L 20.47 9.40 L 19.83 16.15 Z"
      }
    ]
  ]
};

export const KataHighway = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.60 20.47 L 7.85 19.83 L 3.53 14.60 L 4.17 7.85 L 9.40 3.53 L 16.15 4.17 L 20.47 9.40 L 19.83 16.15 Z" />
      {children}
    </svg>
  );
});

export default KataHighway;
