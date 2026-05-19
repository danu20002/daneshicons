import React from 'react';

export const iconData = {
  "id": "XerograRent",
  "name": "XerograRent",
  "category": "DL",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.61 20.77 L 5.52 17.94 L 3.32 10.64 L 7.65 4.36 L 15.26 3.84 L 20.41 9.46 L 19.23 16.99 Z"
      }
    ]
  ]
};

export const XerograRent = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.61 20.77 L 5.52 17.94 L 3.32 10.64 L 7.65 4.36 L 15.26 3.84 L 20.41 9.46 L 19.23 16.99 Z" />
      {children}
    </svg>
  );
});

export default XerograRent;
