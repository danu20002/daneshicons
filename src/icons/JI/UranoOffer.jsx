import React from 'react';

export const iconData = {
  "id": "UranoOffer",
  "name": "UranoOffer",
  "category": "JI",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.22 19.69 L 8.84 19.71 L 4.31 15.22 L 4.29 8.84 L 8.78 4.31 L 15.16 4.29 L 19.69 8.78 L 19.71 15.16 Z"
      }
    ]
  ]
};

export const UranoOffer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.22 19.69 L 8.84 19.71 L 4.31 15.22 L 4.29 8.84 L 8.78 4.31 L 15.16 4.29 L 19.69 8.78 L 19.71 15.16 Z" />
      {children}
    </svg>
  );
});

export default UranoOffer;
