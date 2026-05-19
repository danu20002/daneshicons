import React from 'react';

export const iconData = {
  "id": "SchizoBullet",
  "name": "SchizoBullet",
  "category": "CB",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.60 8.81 L 10.56 9.08 L 15.19 2.60 L 14.92 10.56 L 21.40 15.19 L 13.44 14.92 L 8.81 21.40 L 9.08 13.44 Z"
      }
    ]
  ]
};

export const SchizoBullet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.60 8.81 L 10.56 9.08 L 15.19 2.60 L 14.92 10.56 L 21.40 15.19 L 13.44 14.92 L 8.81 21.40 L 9.08 13.44 Z" />
      {children}
    </svg>
  );
});

export default SchizoBullet;
