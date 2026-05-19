import React from 'react';

export const iconData = {
  "id": "ZampinoNorth",
  "name": "ZampinoNorth",
  "category": "VR",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.65 18.53 L 5.47 6.65 L 17.35 5.47 L 18.53 17.35 Z"
      }
    ]
  ]
};

export const ZampinoNorth = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.65 18.53 L 5.47 6.65 L 17.35 5.47 L 18.53 17.35 Z" />
      {children}
    </svg>
  );
});

export default ZampinoNorth;
