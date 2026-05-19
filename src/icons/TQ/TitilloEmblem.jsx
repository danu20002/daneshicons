import React from 'react';

export const iconData = {
  "id": "TitilloEmblem",
  "name": "TitilloEmblem",
  "category": "TQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 22.08 13.81 L 16.03 16.20 L 13.39 22.15 L 9.25 17.13 L 2.78 16.46 L 6.27 10.97 L 4.91 4.61 L 11.21 6.24 L 16.84 2.97 L 17.24 9.47 Z"
      }
    ]
  ]
};

export const TitilloEmblem = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 22.08 13.81 L 16.03 16.20 L 13.39 22.15 L 9.25 17.13 L 2.78 16.46 L 6.27 10.97 L 4.91 4.61 L 11.21 6.24 L 16.84 2.97 L 17.24 9.47 Z" />
      {children}
    </svg>
  );
});

export default TitilloEmblem;
