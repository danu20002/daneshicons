import React from 'react';

export const iconData = {
  "id": "DracoUnfold",
  "name": "DracoUnfold",
  "category": "RH",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.10 14.26 L 6.09 6.29 L 13.99 4.03 L 19.90 9.74 L 17.91 17.71 L 10.01 19.97 Z"
      }
    ]
  ]
};

export const DracoUnfold = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.10 14.26 L 6.09 6.29 L 13.99 4.03 L 19.90 9.74 L 17.91 17.71 L 10.01 19.97 Z" />
      {children}
    </svg>
  );
});

export default DracoUnfold;
