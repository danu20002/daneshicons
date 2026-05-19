import React from 'react';

export const iconData = {
  "id": "ThymoMaple",
  "name": "ThymoMaple",
  "category": "OM",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.84 2.18 L 14.31 7.50 L 21.82 8.84 L 16.50 14.31 L 15.16 21.82 L 9.69 16.50 L 2.18 15.16 L 7.50 9.69 Z"
      }
    ]
  ]
};

export const ThymoMaple = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.84 2.18 L 14.31 7.50 L 21.82 8.84 L 16.50 14.31 L 15.16 21.82 L 9.69 16.50 L 2.18 15.16 L 7.50 9.69 Z" />
      {children}
    </svg>
  );
});

export default ThymoMaple;
