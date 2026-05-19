import React from 'react';

export const iconData = {
  "id": "VerticeChasm",
  "name": "VerticeChasm",
  "category": "AO",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.88 2.68 L 17.09 3.91 L 21.32 9.88 L 20.09 17.09 L 14.12 21.32 L 6.91 20.09 L 2.68 14.12 L 3.91 6.91 Z"
      }
    ]
  ]
};

export const VerticeChasm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.88 2.68 L 17.09 3.91 L 21.32 9.88 L 20.09 17.09 L 14.12 21.32 L 6.91 20.09 L 2.68 14.12 L 3.91 6.91 Z" />
      {children}
    </svg>
  );
});

export default VerticeChasm;
