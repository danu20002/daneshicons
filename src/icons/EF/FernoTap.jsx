import React from 'react';

export const iconData = {
  "id": "FernoTap",
  "name": "FernoTap",
  "category": "EF",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.96 15.65 L 11.30 21.65 L 2.60 14.32 L 6.89 3.78 L 18.24 4.60 Z"
      }
    ]
  ]
};

export const FernoTap = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.96 15.65 L 11.30 21.65 L 2.60 14.32 L 6.89 3.78 L 18.24 4.60 Z" />
      {children}
    </svg>
  );
});

export default FernoTap;
