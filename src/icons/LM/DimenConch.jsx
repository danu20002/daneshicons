import React from 'react';

export const iconData = {
  "id": "DimenConch",
  "name": "DimenConch",
  "category": "LM",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.84 10.35 L 13.65 20.84 L 3.16 13.65 L 10.35 3.16 Z"
      }
    ]
  ]
};

export const DimenConch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.84 10.35 L 13.65 20.84 L 3.16 13.65 L 10.35 3.16 Z" />
      {children}
    </svg>
  );
});

export default DimenConch;
