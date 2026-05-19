import React from 'react';

export const iconData = {
  "id": "RemoDryad",
  "name": "RemoDryad",
  "category": "HW",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.14 19.74 L 3.75 11.67 L 9.77 4.05 L 18.87 7.42 L 18.48 17.12 Z"
      }
    ]
  ]
};

export const RemoDryad = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.14 19.74 L 3.75 11.67 L 9.77 4.05 L 18.87 7.42 L 18.48 17.12 Z" />
      {children}
    </svg>
  );
});

export default RemoDryad;
