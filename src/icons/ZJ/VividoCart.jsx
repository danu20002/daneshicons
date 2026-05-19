import React from 'react';

export const iconData = {
  "id": "VividoCart",
  "name": "VividoCart",
  "category": "ZJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.84 17.56 L 11.26 2.15 L 20.90 16.28 Z"
      }
    ]
  ]
};

export const VividoCart = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.84 17.56 L 11.26 2.15 L 20.90 16.28 Z" />
      {children}
    </svg>
  );
});

export default VividoCart;
