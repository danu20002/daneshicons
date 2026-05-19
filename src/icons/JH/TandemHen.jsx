import React from 'react';

export const iconData = {
  "id": "TandemHen",
  "name": "TandemHen",
  "category": "JH",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.68 13.60 L 17.01 19.27 L 10.40 20.68 L 4.73 17.01 L 3.32 10.40 L 6.99 4.73 L 13.60 3.32 L 19.27 6.99 Z"
      }
    ]
  ]
};

export const TandemHen = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.68 13.60 L 17.01 19.27 L 10.40 20.68 L 4.73 17.01 L 3.32 10.40 L 6.99 4.73 L 13.60 3.32 L 19.27 6.99 Z" />
      {children}
    </svg>
  );
});

export default TandemHen;
