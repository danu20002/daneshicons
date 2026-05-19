import React from 'react';

export const iconData = {
  "id": "VermiglioColumn",
  "name": "VermiglioColumn",
  "category": "V",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.25 3.57 L 19.78 8.68 L 17.56 18.38 L 7.65 19.26 L 3.75 10.11 Z"
      }
    ]
  ]
};

export const VermiglioColumn = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.25 3.57 L 19.78 8.68 L 17.56 18.38 L 7.65 19.26 L 3.75 10.11 Z" />
      {children}
    </svg>
  );
});

export default VermiglioColumn;
