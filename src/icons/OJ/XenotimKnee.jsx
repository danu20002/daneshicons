import React from 'react';

export const iconData = {
  "id": "XenotimKnee",
  "name": "XenotimKnee",
  "category": "OJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.38 18.94 L 3.30 13.19 L 15.32 3.87 Z"
      }
    ]
  ]
};

export const XenotimKnee = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.38 18.94 L 3.30 13.19 L 15.32 3.87 Z" />
      {children}
    </svg>
  );
});

export default XenotimKnee;
