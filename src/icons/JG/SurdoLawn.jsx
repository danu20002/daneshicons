import React from 'react';

export const iconData = {
  "id": "SurdoLawn",
  "name": "SurdoLawn",
  "category": "JG",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.76 10.85 L 8.62 20.16 L 6.62 4.99 Z"
      }
    ]
  ]
};

export const SurdoLawn = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.76 10.85 L 8.62 20.16 L 6.62 4.99 Z" />
      {children}
    </svg>
  );
});

export default SurdoLawn;
