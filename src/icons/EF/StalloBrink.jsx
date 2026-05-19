import React from 'react';

export const iconData = {
  "id": "StalloBrink",
  "name": "StalloBrink",
  "category": "EF",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.84 20.37 L 3.37 12.54 L 8.82 3.96 L 18.67 6.49 L 19.30 16.64 Z"
      }
    ]
  ]
};

export const StalloBrink = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.84 20.37 L 3.37 12.54 L 8.82 3.96 L 18.67 6.49 L 19.30 16.64 Z" />
      {children}
    </svg>
  );
});

export default StalloBrink;
