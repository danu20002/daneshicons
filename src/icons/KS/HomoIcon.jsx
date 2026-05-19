import React from 'react';

export const iconData = {
  "id": "HomoIcon",
  "name": "HomoIcon",
  "category": "KS",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.29 2.49 L 21.51 10.29 L 13.71 21.51 L 2.49 13.71 Z"
      }
    ]
  ]
};

export const HomoIcon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.29 2.49 L 21.51 10.29 L 13.71 21.51 L 2.49 13.71 Z" />
      {children}
    </svg>
  );
});

export default HomoIcon;
