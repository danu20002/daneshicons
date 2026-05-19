import React from 'react';

export const iconData = {
  "id": "NeutroFridge",
  "name": "NeutroFridge",
  "category": "RH",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.41 4.24 L 20.61 9.63 L 19.76 16.41 L 14.37 20.61 L 7.59 19.76 L 3.39 14.37 L 4.24 7.59 L 9.63 3.39 Z"
      }
    ]
  ]
};

export const NeutroFridge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.41 4.24 L 20.61 9.63 L 19.76 16.41 L 14.37 20.61 L 7.59 19.76 L 3.39 14.37 L 4.24 7.59 L 9.63 3.39 Z" />
      {children}
    </svg>
  );
});

export default NeutroFridge;
