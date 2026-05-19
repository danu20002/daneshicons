import React from 'react';

export const iconData = {
  "id": "UranoXylophone",
  "name": "UranoXylophone",
  "category": "KB",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.72 17.52 L 14.36 21.19 L 7.90 20.56 L 3.36 15.92 L 2.86 9.45 L 6.64 4.17 L 12.92 2.56 L 18.78 5.36 L 21.46 11.27 Z"
      }
    ]
  ]
};

export const UranoXylophone = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.72 17.52 L 14.36 21.19 L 7.90 20.56 L 3.36 15.92 L 2.86 9.45 L 6.64 4.17 L 12.92 2.56 L 18.78 5.36 L 21.46 11.27 Z" />
      {children}
    </svg>
  );
});

export default UranoXylophone;
