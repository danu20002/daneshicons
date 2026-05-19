import React from 'react';

export const iconData = {
  "id": "NodoTrim",
  "name": "NodoTrim",
  "category": "XX",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.66 3.58 L 20.55 8.63 L 20.42 15.66 L 15.37 20.55 L 8.34 20.42 L 3.45 15.37 L 3.58 8.34 L 8.63 3.45 Z"
      }
    ]
  ]
};

export const NodoTrim = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.66 3.58 L 20.55 8.63 L 20.42 15.66 L 15.37 20.55 L 8.34 20.42 L 3.45 15.37 L 3.58 8.34 L 8.63 3.45 Z" />
      {children}
    </svg>
  );
});

export default NodoTrim;
