import React from 'react';

export const iconData = {
  "id": "MantoFall",
  "name": "MantoFall",
  "category": "QQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.79 5.86 L 13.55 4.10 L 19.14 8.29 L 19.36 15.27 L 14.03 19.79 L 7.18 18.44 L 3.96 12.25 Z"
      }
    ]
  ]
};

export const MantoFall = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.79 5.86 L 13.55 4.10 L 19.14 8.29 L 19.36 15.27 L 14.03 19.79 L 7.18 18.44 L 3.96 12.25 Z" />
      {children}
    </svg>
  );
});

export default MantoFall;
