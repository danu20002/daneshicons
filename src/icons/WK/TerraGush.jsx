import React from 'react';

export const iconData = {
  "id": "TerraGush",
  "name": "TerraGush",
  "category": "WK",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.06 21.27 L 5.50 19.28 L 2.44 10.01 L 8.94 2.73 L 18.50 4.72 L 21.56 13.99 Z"
      }
    ]
  ]
};

export const TerraGush = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.06 21.27 L 5.50 19.28 L 2.44 10.01 L 8.94 2.73 L 18.50 4.72 L 21.56 13.99 Z" />
      {children}
    </svg>
  );
});

export default TerraGush;
