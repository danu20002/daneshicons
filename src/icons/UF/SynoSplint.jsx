import React from 'react';

export const iconData = {
  "id": "SynoSplint",
  "name": "SynoSplint",
  "category": "UF",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.83 20.19 L 3.81 15.83 L 8.17 3.81 L 20.19 8.17 Z"
      }
    ]
  ]
};

export const SynoSplint = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.83 20.19 L 3.81 15.83 L 8.17 3.81 L 20.19 8.17 Z" />
      {children}
    </svg>
  );
});

export default SynoSplint;
