import React from 'react';

export const iconData = {
  "id": "FlexoLustre",
  "name": "FlexoLustre",
  "category": "PV",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.76 16.65 L 11.36 20.18 L 4.59 15.53 L 5.24 7.35 L 12.64 3.82 L 19.41 8.47 Z"
      }
    ]
  ]
};

export const FlexoLustre = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.76 16.65 L 11.36 20.18 L 4.59 15.53 L 5.24 7.35 L 12.64 3.82 L 19.41 8.47 Z" />
      {children}
    </svg>
  );
});

export default FlexoLustre;
