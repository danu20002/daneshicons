import React from 'react';

export const iconData = {
  "id": "NasoTea",
  "name": "NasoTea",
  "category": "QP",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.21 7.75 L 16.25 20.21 L 3.79 16.25 L 7.75 3.79 Z"
      }
    ]
  ]
};

export const NasoTea = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.21 7.75 L 16.25 20.21 L 3.79 16.25 L 7.75 3.79 Z" />
      {children}
    </svg>
  );
});

export default NasoTea;
