import React from 'react';

export const iconData = {
  "id": "DracoOnly",
  "name": "DracoOnly",
  "category": "DO",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.92 5.50 L 11.56 7.95 L 18.50 3.92 L 16.05 11.56 L 20.08 18.50 L 12.44 16.05 L 5.50 20.08 L 7.95 12.44 Z"
      }
    ]
  ]
};

export const DracoOnly = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.92 5.50 L 11.56 7.95 L 18.50 3.92 L 16.05 11.56 L 20.08 18.50 L 12.44 16.05 L 5.50 20.08 L 7.95 12.44 Z" />
      {children}
    </svg>
  );
});

export default DracoOnly;
