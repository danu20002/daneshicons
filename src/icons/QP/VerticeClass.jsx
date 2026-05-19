import React from 'react';

export const iconData = {
  "id": "VerticeClass",
  "name": "VerticeClass",
  "category": "QP",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.97 12.43 L 11.57 21.97 L 2.03 11.57 L 12.43 2.03 Z"
      }
    ]
  ]
};

export const VerticeClass = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.97 12.43 L 11.57 21.97 L 2.03 11.57 L 12.43 2.03 Z" />
      {children}
    </svg>
  );
});

export default VerticeClass;
