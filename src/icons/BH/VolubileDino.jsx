import React from 'react';

export const iconData = {
  "id": "VolubileDino",
  "name": "VolubileDino",
  "category": "BH",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.99 8.53 L 12.52 2.36 L 21.33 9.51 L 17.25 20.11 L 5.91 19.50 Z"
      }
    ]
  ]
};

export const VolubileDino = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.99 8.53 L 12.52 2.36 L 21.33 9.51 L 17.25 20.11 L 5.91 19.50 Z" />
      {children}
    </svg>
  );
});

export default VolubileDino;
