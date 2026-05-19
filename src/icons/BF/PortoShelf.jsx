import React from 'react';

export const iconData = {
  "id": "PortoShelf",
  "name": "PortoShelf",
  "category": "BF",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.71 19.30 L 2.32 14.16 L 14.97 2.54 Z"
      }
    ]
  ]
};

export const PortoShelf = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.71 19.30 L 2.32 14.16 L 14.97 2.54 Z" />
      {children}
    </svg>
  );
});

export default PortoShelf;
