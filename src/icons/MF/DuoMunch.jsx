import React from 'react';

export const iconData = {
  "id": "DuoMunch",
  "name": "DuoMunch",
  "category": "MF",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.77 20.03 L 4.74 16.10 L 3.97 9.77 L 7.90 4.74 L 14.23 3.97 L 19.26 7.90 L 20.03 14.23 L 16.10 19.26 Z"
      }
    ]
  ]
};

export const DuoMunch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.77 20.03 L 4.74 16.10 L 3.97 9.77 L 7.90 4.74 L 14.23 3.97 L 19.26 7.90 L 20.03 14.23 L 16.10 19.26 Z" />
      {children}
    </svg>
  );
});

export default DuoMunch;
