import React from 'react';

export const iconData = {
  "id": "KiloRuby",
  "name": "KiloRuby",
  "category": "RL",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.56 2.54 L 15.26 10.52 L 21.46 15.56 L 13.48 15.26 L 8.44 21.46 L 8.74 13.48 L 2.54 8.44 L 10.52 8.74 Z"
      }
    ]
  ]
};

export const KiloRuby = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.56 2.54 L 15.26 10.52 L 21.46 15.56 L 13.48 15.26 L 8.44 21.46 L 8.74 13.48 L 2.54 8.44 L 10.52 8.74 Z" />
      {children}
    </svg>
  );
});

export default KiloRuby;
