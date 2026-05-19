import React from 'react';

export const iconData = {
  "id": "XericoLegume",
  "name": "XericoLegume",
  "category": "A",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.09 3.74 L 20.26 13.09 L 10.91 20.26 L 3.74 10.91 Z"
      }
    ]
  ]
};

export const XericoLegume = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.09 3.74 L 20.26 13.09 L 10.91 20.26 L 3.74 10.91 Z" />
      {children}
    </svg>
  );
});

export default XericoLegume;
