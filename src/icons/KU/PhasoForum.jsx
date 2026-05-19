import React from 'react';

export const iconData = {
  "id": "PhasoForum",
  "name": "PhasoForum",
  "category": "KU",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.42 10.22 L 20.36 16.69 L 15.39 20.97 L 8.84 21.05 L 3.76 16.90 L 2.54 10.46 L 5.74 4.74 L 11.88 2.41 L 18.07 4.58 Z"
      }
    ]
  ]
};

export const PhasoForum = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.42 10.22 L 20.36 16.69 L 15.39 20.97 L 8.84 21.05 L 3.76 16.90 L 2.54 10.46 L 5.74 4.74 L 11.88 2.41 L 18.07 4.58 Z" />
      {children}
    </svg>
  );
});

export default PhasoForum;
