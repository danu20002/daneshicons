import React from 'react';

export const iconData = {
  "id": "CyanoRetail",
  "name": "CyanoRetail",
  "category": "V",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.56 18.43 L 2.90 11.99 L 5.57 5.56 L 12.01 2.90 L 18.44 5.57 L 21.10 12.01 L 18.43 18.44 L 11.99 21.10 Z"
      }
    ]
  ]
};

export const CyanoRetail = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.56 18.43 L 2.90 11.99 L 5.57 5.56 L 12.01 2.90 L 18.44 5.57 L 21.10 12.01 L 18.43 18.44 L 11.99 21.10 Z" />
      {children}
    </svg>
  );
});

export default CyanoRetail;
