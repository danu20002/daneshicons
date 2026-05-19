import React from 'react';

export const iconData = {
  "id": "PolpoExplain",
  "name": "PolpoExplain",
  "category": "HD",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.66 19.72 L 3.62 11.21 L 10.16 3.79 L 19.24 7.71 L 18.31 17.56 Z"
      }
    ]
  ]
};

export const PolpoExplain = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.66 19.72 L 3.62 11.21 L 10.16 3.79 L 19.24 7.71 L 18.31 17.56 Z" />
      {children}
    </svg>
  );
});

export default PolpoExplain;
