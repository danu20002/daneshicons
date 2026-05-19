import React from 'react';

export const iconData = {
  "id": "DilithioSpray",
  "name": "DilithioSpray",
  "category": "PG",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.10 20.74 L 8.63 13.64 L 1.49 11.26 L 8.89 9.90 L 7.38 2.53 L 12.26 8.26 L 17.90 3.26 L 15.37 10.36 L 22.51 12.74 L 15.11 14.10 L 16.62 21.47 L 11.74 15.74 Z"
      }
    ]
  ]
};

export const DilithioSpray = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.10 20.74 L 8.63 13.64 L 1.49 11.26 L 8.89 9.90 L 7.38 2.53 L 12.26 8.26 L 17.90 3.26 L 15.37 10.36 L 22.51 12.74 L 15.11 14.10 L 16.62 21.47 L 11.74 15.74 Z" />
      {children}
    </svg>
  );
});

export default DilithioSpray;
