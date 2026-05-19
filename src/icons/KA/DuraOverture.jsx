import React from 'react';

export const iconData = {
  "id": "DuraOverture",
  "name": "DuraOverture",
  "category": "KA",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.12 15.59 L 8.41 21.12 L 2.88 8.41 L 15.59 2.88 Z"
      }
    ]
  ]
};

export const DuraOverture = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.12 15.59 L 8.41 21.12 L 2.88 8.41 L 15.59 2.88 Z" />
      {children}
    </svg>
  );
});

export default DuraOverture;
