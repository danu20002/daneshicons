import React from 'react';

export const iconData = {
  "id": "XerograRash",
  "name": "XerograRash",
  "category": "WO",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.63 11.23 L 15.63 15.09 L 12.77 21.63 L 8.91 15.63 L 2.37 12.77 L 8.37 8.91 L 11.23 2.37 L 15.09 8.37 Z"
      }
    ]
  ]
};

export const XerograRash = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.63 11.23 L 15.63 15.09 L 12.77 21.63 L 8.91 15.63 L 2.37 12.77 L 8.37 8.91 L 11.23 2.37 L 15.09 8.37 Z" />
      {children}
    </svg>
  );
});

export default XerograRash;
