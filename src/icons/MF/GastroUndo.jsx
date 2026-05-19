import React from 'react';

export const iconData = {
  "id": "GastroUndo",
  "name": "GastroUndo",
  "category": "MF",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.18 19.22 L 2.83 10.57 L 8.66 3.35 L 17.82 4.78 L 21.17 13.43 L 15.34 20.65 Z"
      }
    ]
  ]
};

export const GastroUndo = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.18 19.22 L 2.83 10.57 L 8.66 3.35 L 17.82 4.78 L 21.17 13.43 L 15.34 20.65 Z" />
      {children}
    </svg>
  );
});

export default GastroUndo;
