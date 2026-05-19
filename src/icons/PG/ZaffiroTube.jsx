import React from 'react';

export const iconData = {
  "id": "ZaffiroTube",
  "name": "ZaffiroTube",
  "category": "PG",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.35 18.12 L 12.71 16.59 L 5.88 20.35 L 7.41 12.71 L 3.65 5.88 L 11.29 7.41 L 18.12 3.65 L 16.59 11.29 Z"
      }
    ]
  ]
};

export const ZaffiroTube = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.35 18.12 L 12.71 16.59 L 5.88 20.35 L 7.41 12.71 L 3.65 5.88 L 11.29 7.41 L 18.12 3.65 L 16.59 11.29 Z" />
      {children}
    </svg>
  );
});

export default ZaffiroTube;
