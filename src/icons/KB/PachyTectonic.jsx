import React from 'react';

export const iconData = {
  "id": "PachyTectonic",
  "name": "PachyTectonic",
  "category": "KB",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.65 4.34 L 15.46 2.67 L 21.81 10.33 L 18.35 19.66 L 8.54 21.33 L 2.19 13.67 Z"
      }
    ]
  ]
};

export const PachyTectonic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.65 4.34 L 15.46 2.67 L 21.81 10.33 L 18.35 19.66 L 8.54 21.33 L 2.19 13.67 Z" />
      {children}
    </svg>
  );
});

export default PachyTectonic;
