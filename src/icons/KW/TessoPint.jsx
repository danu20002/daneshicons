import React from 'react';

export const iconData = {
  "id": "TessoPint",
  "name": "TessoPint",
  "category": "KW",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.72 19.54 L 6.39 13.42 L 2.89 8.36 L 8.92 7.10 L 12.65 2.21 L 15.70 7.55 L 21.51 9.59 L 17.37 14.15 L 17.23 20.30 L 11.62 17.77 Z"
      }
    ]
  ]
};

export const TessoPint = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.72 19.54 L 6.39 13.42 L 2.89 8.36 L 8.92 7.10 L 12.65 2.21 L 15.70 7.55 L 21.51 9.59 L 17.37 14.15 L 17.23 20.30 L 11.62 17.77 Z" />
      {children}
    </svg>
  );
});

export default TessoPint;
