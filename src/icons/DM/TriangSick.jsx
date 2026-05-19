import React from 'react';

export const iconData = {
  "id": "TriangSick",
  "name": "TriangSick",
  "category": "DM",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.80 19.12 L 2.56 11.59 L 6.44 4.37 L 14.50 2.89 L 20.68 8.27 L 20.33 16.46 L 13.70 21.29 Z"
      }
    ]
  ]
};

export const TriangSick = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.80 19.12 L 2.56 11.59 L 6.44 4.37 L 14.50 2.89 L 20.68 8.27 L 20.33 16.46 L 13.70 21.29 Z" />
      {children}
    </svg>
  );
});

export default TriangSick;
