import React from 'react';

export const iconData = {
  "id": "MagniMonster",
  "name": "MagniMonster",
  "category": "VU",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.69 17.34 L 6.78 10.86 L 6.66 3.69 L 13.14 6.78 L 20.31 6.66 L 17.22 13.14 L 17.34 20.31 L 10.86 17.22 Z"
      }
    ]
  ]
};

export const MagniMonster = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.69 17.34 L 6.78 10.86 L 6.66 3.69 L 13.14 6.78 L 20.31 6.66 L 17.22 13.14 L 17.34 20.31 L 10.86 17.22 Z" />
      {children}
    </svg>
  );
});

export default MagniMonster;
