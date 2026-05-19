import React from 'react';

export const iconData = {
  "id": "ZombiPaste",
  "name": "ZombiPaste",
  "category": "XF",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.38 20.24 L 3.93 15.99 L 3.26 9.87 L 6.67 4.75 L 12.58 3.02 L 18.22 5.49 L 20.95 11.01 L 19.49 16.99 L 14.52 20.64 Z"
      }
    ]
  ]
};

export const ZombiPaste = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.38 20.24 L 3.93 15.99 L 3.26 9.87 L 6.67 4.75 L 12.58 3.02 L 18.22 5.49 L 20.95 11.01 L 19.49 16.99 L 14.52 20.64 Z" />
      {children}
    </svg>
  );
});

export default ZombiPaste;
