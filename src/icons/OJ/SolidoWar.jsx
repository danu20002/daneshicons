import React from 'react';

export const iconData = {
  "id": "SolidoWar",
  "name": "SolidoWar",
  "category": "OJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.23 7.73 L 16.27 5.23 L 18.77 16.27 L 7.73 18.77 Z"
      }
    ]
  ]
};

export const SolidoWar = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.23 7.73 L 16.27 5.23 L 18.77 16.27 L 7.73 18.77 Z" />
      {children}
    </svg>
  );
});

export default SolidoWar;
