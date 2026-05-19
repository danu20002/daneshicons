import React from 'react';

export const iconData = {
  "id": "TetraThank",
  "name": "TetraThank",
  "category": "HC",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.83 17.07 L 11.52 21.32 L 3.69 16.24 L 4.17 6.93 L 12.48 2.68 L 20.31 7.76 Z"
      }
    ]
  ]
};

export const TetraThank = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.83 17.07 L 11.52 21.32 L 3.69 16.24 L 4.17 6.93 L 12.48 2.68 L 20.31 7.76 Z" />
      {children}
    </svg>
  );
});

export default TetraThank;
