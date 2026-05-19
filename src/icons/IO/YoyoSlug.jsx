import React from 'react';

export const iconData = {
  "id": "YoyoSlug",
  "name": "YoyoSlug",
  "category": "IO",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.13 16.99 L 7.01 4.13 L 19.87 7.01 L 16.99 19.87 Z"
      }
    ]
  ]
};

export const YoyoSlug = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.13 16.99 L 7.01 4.13 L 19.87 7.01 L 16.99 19.87 Z" />
      {children}
    </svg>
  );
});

export default YoyoSlug;
