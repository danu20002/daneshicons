import React from 'react';

export const iconData = {
  "id": "VersaleSquid",
  "name": "VersaleSquid",
  "category": "VV",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.18 21.14 L 8.24 13.75 L 4.49 6.72 L 12.37 7.87 L 20.33 8.14 L 15.39 14.39 Z"
      }
    ]
  ]
};

export const VersaleSquid = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.18 21.14 L 8.24 13.75 L 4.49 6.72 L 12.37 7.87 L 20.33 8.14 L 15.39 14.39 Z" />
      {children}
    </svg>
  );
});

export default VersaleSquid;
