import React from 'react';

export const iconData = {
  "id": "JatoRecipe",
  "name": "JatoRecipe",
  "category": "IR",
  "nodes": [
    [
      "path",
      {
        "d": "M 1.32 13.67 L 9.42 8.81 L 15.89 1.92 L 16.05 11.36 L 18.79 20.41 L 10.52 15.83 Z"
      }
    ]
  ]
};

export const JatoRecipe = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 1.32 13.67 L 9.42 8.81 L 15.89 1.92 L 16.05 11.36 L 18.79 20.41 L 10.52 15.83 Z" />
      {children}
    </svg>
  );
});

export default JatoRecipe;
