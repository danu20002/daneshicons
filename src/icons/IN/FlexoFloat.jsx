import React from 'react';

export const iconData = {
  "id": "FlexoFloat",
  "name": "FlexoFloat",
  "category": "IN",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.79 3.65 L 19.88 8.07 L 20.35 14.79 L 15.93 19.88 L 9.21 20.35 L 4.12 15.93 L 3.65 9.21 L 8.07 4.12 Z"
      }
    ]
  ]
};

export const FlexoFloat = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.79 3.65 L 19.88 8.07 L 20.35 14.79 L 15.93 19.88 L 9.21 20.35 L 4.12 15.93 L 3.65 9.21 L 8.07 4.12 Z" />
      {children}
    </svg>
  );
});

export default FlexoFloat;
