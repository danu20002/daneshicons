import React from 'react';

export const iconData = {
  "id": "FormoViable",
  "name": "FormoViable",
  "category": "LO",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.96 9.03 L 17.72 13.36 L 19.55 19.14 L 13.68 17.63 L 9.59 22.11 L 7.96 16.27 L 2.04 14.97 L 6.28 10.64 L 4.45 4.86 L 10.32 6.37 L 14.41 1.89 L 16.04 7.73 Z"
      }
    ]
  ]
};

export const FormoViable = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.96 9.03 L 17.72 13.36 L 19.55 19.14 L 13.68 17.63 L 9.59 22.11 L 7.96 16.27 L 2.04 14.97 L 6.28 10.64 L 4.45 4.86 L 10.32 6.37 L 14.41 1.89 L 16.04 7.73 Z" />
      {children}
    </svg>
  );
});

export default FormoViable;
