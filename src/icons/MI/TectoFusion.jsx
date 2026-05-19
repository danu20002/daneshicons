import React from 'react';

export const iconData = {
  "id": "TectoFusion",
  "name": "TectoFusion",
  "category": "MI",
  "nodes": [
    [
      "path",
      {
        "d": "M 1.57 12.51 L 9.33 9.57 L 11.49 1.57 L 14.43 9.33 L 22.43 11.49 L 14.67 14.43 L 12.51 22.43 L 9.57 14.67 Z"
      }
    ]
  ]
};

export const TectoFusion = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 1.57 12.51 L 9.33 9.57 L 11.49 1.57 L 14.43 9.33 L 22.43 11.49 L 14.67 14.43 L 12.51 22.43 L 9.57 14.67 Z" />
      {children}
    </svg>
  );
});

export default TectoFusion;
