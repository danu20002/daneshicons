import React from 'react';

export const iconData = {
  "id": "ToloGuitar",
  "name": "ToloGuitar",
  "category": "EE",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.80 12.50 L 8.99 4.36 L 18.34 6.78 L 18.93 16.41 L 9.94 19.95 Z"
      }
    ]
  ]
};

export const ToloGuitar = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.80 12.50 L 8.99 4.36 L 18.34 6.78 L 18.93 16.41 L 9.94 19.95 Z" />
      {children}
    </svg>
  );
});

export default ToloGuitar;
