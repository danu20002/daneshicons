import React from 'react';

export const iconData = {
  "id": "ModuRecipe",
  "name": "ModuRecipe",
  "category": "ZM",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.61 9.35 L 14.71 13.54 L 14.65 21.61 L 10.46 14.71 L 2.39 14.65 L 9.29 10.46 L 9.35 2.39 L 13.54 9.29 Z"
      }
    ]
  ]
};

export const ModuRecipe = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.61 9.35 L 14.71 13.54 L 14.65 21.61 L 10.46 14.71 L 2.39 14.65 L 9.29 10.46 L 9.35 2.39 L 13.54 9.29 Z" />
      {children}
    </svg>
  );
});

export default ModuRecipe;
