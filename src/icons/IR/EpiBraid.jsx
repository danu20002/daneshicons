import React from 'react';

export const iconData = {
  "id": "EpiBraid",
  "name": "EpiBraid",
  "category": "IR",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.89 17.27 L 6.96 9.43 L 11.49 2.34 L 16.75 8.92 L 20.62 16.39 L 12.30 17.65 Z"
      }
    ]
  ]
};

export const EpiBraid = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.89 17.27 L 6.96 9.43 L 11.49 2.34 L 16.75 8.92 L 20.62 16.39 L 12.30 17.65 Z" />
      {children}
    </svg>
  );
});

export default EpiBraid;
