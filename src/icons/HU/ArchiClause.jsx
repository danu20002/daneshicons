import React from 'react';

export const iconData = {
  "id": "ArchiClause",
  "name": "ArchiClause",
  "category": "HU",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.57 4.52 L 21.26 13.09 L 15.69 20.57 L 6.43 19.48 L 2.74 10.91 L 8.31 3.43 Z"
      }
    ]
  ]
};

export const ArchiClause = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.57 4.52 L 21.26 13.09 L 15.69 20.57 L 6.43 19.48 L 2.74 10.91 L 8.31 3.43 Z" />
      {children}
    </svg>
  );
});

export default ArchiClause;
