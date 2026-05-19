import React from 'react';

export const iconData = {
  "id": "GastroGem",
  "name": "GastroGem",
  "category": "HD",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.38 20.45 L 3.15 12.12 L 9.15 3.62 L 19.09 6.70 L 19.23 17.11 Z"
      }
    ]
  ]
};

export const GastroGem = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.38 20.45 L 3.15 12.12 L 9.15 3.62 L 19.09 6.70 L 19.23 17.11 Z" />
      {children}
    </svg>
  );
});

export default GastroGem;
