import React from 'react';

export const iconData = {
  "id": "UlceraMug",
  "name": "UlceraMug",
  "category": "UJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.03 3.37 L 15.38 11.11 L 20.63 17.03 L 12.89 15.38 L 6.97 20.63 L 8.62 12.89 L 3.37 6.97 L 11.11 8.62 Z"
      }
    ]
  ]
};

export const UlceraMug = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.03 3.37 L 15.38 11.11 L 20.63 17.03 L 12.89 15.38 L 6.97 20.63 L 8.62 12.89 L 3.37 6.97 L 11.11 8.62 Z" />
      {children}
    </svg>
  );
});

export default UlceraMug;
