import React from 'react';

export const iconData = {
  "id": "SensoEditor",
  "name": "SensoEditor",
  "category": "SB",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.18 15.36 L 4.09 8.84 L 8.64 4.18 L 15.16 4.09 L 19.82 8.64 L 19.91 15.16 L 15.36 19.82 L 8.84 19.91 Z"
      }
    ]
  ]
};

export const SensoEditor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.18 15.36 L 4.09 8.84 L 8.64 4.18 L 15.16 4.09 L 19.82 8.64 L 19.91 15.16 L 15.36 19.82 L 8.84 19.91 Z" />
      {children}
    </svg>
  );
});

export default SensoEditor;
