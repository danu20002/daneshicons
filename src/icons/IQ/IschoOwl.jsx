import React from 'react';

export const iconData = {
  "id": "IschoOwl",
  "name": "IschoOwl",
  "category": "IQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.44 2.07 L 15.78 7.74 L 21.45 7.41 L 17.69 11.66 L 21.93 15.44 L 16.26 15.78 L 16.59 21.45 L 12.34 17.69 L 8.56 21.93 L 8.22 16.26 L 2.55 16.59 L 6.31 12.34 L 2.07 8.56 L 7.74 8.22 L 7.41 2.55 L 11.66 6.31 Z"
      }
    ]
  ]
};

export const IschoOwl = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.44 2.07 L 15.78 7.74 L 21.45 7.41 L 17.69 11.66 L 21.93 15.44 L 16.26 15.78 L 16.59 21.45 L 12.34 17.69 L 8.56 21.93 L 8.22 16.26 L 2.55 16.59 L 6.31 12.34 L 2.07 8.56 L 7.74 8.22 L 7.41 2.55 L 11.66 6.31 Z" />
      {children}
    </svg>
  );
});

export default IschoOwl;
