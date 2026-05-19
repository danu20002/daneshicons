import React from 'react';

export const iconData = {
  "id": "SpicoStrap",
  "name": "SpicoStrap",
  "category": "JG",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.09 19.51 L 6.43 19.16 L 3.47 8.92 L 12.30 2.93 L 20.72 9.48 Z"
      }
    ]
  ]
};

export const SpicoStrap = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.09 19.51 L 6.43 19.16 L 3.47 8.92 L 12.30 2.93 L 20.72 9.48 Z" />
      {children}
    </svg>
  );
});

export default SpicoStrap;
