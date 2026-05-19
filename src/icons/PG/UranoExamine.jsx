import React from 'react';

export const iconData = {
  "id": "UranoExamine",
  "name": "UranoExamine",
  "category": "PG",
  "nodes": [
    [
      "path",
      {
        "d": "M 22.32 10.36 L 15.48 14.52 L 13.64 22.32 L 9.48 15.48 L 1.68 13.64 L 8.52 9.48 L 10.36 1.68 L 14.52 8.52 Z"
      }
    ]
  ]
};

export const UranoExamine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 22.32 10.36 L 15.48 14.52 L 13.64 22.32 L 9.48 15.48 L 1.68 13.64 L 8.52 9.48 L 10.36 1.68 L 14.52 8.52 Z" />
      {children}
    </svg>
  );
});

export default UranoExamine;
