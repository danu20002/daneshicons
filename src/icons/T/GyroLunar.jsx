import React from 'react';

export const iconData = {
  "id": "GyroLunar",
  "name": "GyroLunar",
  "category": "T",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.67 19.14 L 8.65 20.48 L 2.98 13.34 L 6.33 4.86 L 15.35 3.52 L 21.02 10.66 Z"
      }
    ]
  ]
};

export const GyroLunar = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.67 19.14 L 8.65 20.48 L 2.98 13.34 L 6.33 4.86 L 15.35 3.52 L 21.02 10.66 Z" />
      {children}
    </svg>
  );
});

export default GyroLunar;
