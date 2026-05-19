import React from 'react';

export const iconData = {
  "id": "LarimoLeech",
  "name": "LarimoLeech",
  "category": "BG",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.90 4.79 L 13.49 3.29 L 19.21 6.90 L 20.71 13.49 L 17.10 19.21 L 10.51 20.71 L 4.79 17.10 L 3.29 10.51 Z"
      }
    ]
  ]
};

export const LarimoLeech = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.90 4.79 L 13.49 3.29 L 19.21 6.90 L 20.71 13.49 L 17.10 19.21 L 10.51 20.71 L 4.79 17.10 L 3.29 10.51 Z" />
      {children}
    </svg>
  );
});

export default LarimoLeech;
