import React from 'react';

export const iconData = {
  "id": "ToloWrite",
  "name": "ToloWrite",
  "category": "EQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.00 3.32 L 19.65 12.00 L 12.00 20.68 L 4.35 12.00 Z"
      }
    ]
  ]
};

export const ToloWrite = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.00 3.32 L 19.65 12.00 L 12.00 20.68 L 4.35 12.00 Z" />
      {children}
    </svg>
  );
});

export default ToloWrite;
