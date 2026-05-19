import React from 'react';

export const iconData = {
  "id": "DensoTectonic",
  "name": "DensoTectonic",
  "category": "PC",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.11 15.42 L 4.98 17.31 L 10.91 3.27 Z"
      }
    ]
  ]
};

export const DensoTectonic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.11 15.42 L 4.98 17.31 L 10.91 3.27 Z" />
      {children}
    </svg>
  );
});

export default DensoTectonic;
