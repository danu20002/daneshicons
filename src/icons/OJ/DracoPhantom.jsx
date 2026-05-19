import React from 'react';

export const iconData = {
  "id": "DracoPhantom",
  "name": "DracoPhantom",
  "category": "OJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.32 9.94 L 18.62 4.65 L 15.05 21.41 Z"
      }
    ]
  ]
};

export const DracoPhantom = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.32 9.94 L 18.62 4.65 L 15.05 21.41 Z" />
      {children}
    </svg>
  );
});

export default DracoPhantom;
