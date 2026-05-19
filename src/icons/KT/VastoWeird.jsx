import React from 'react';

export const iconData = {
  "id": "VastoWeird",
  "name": "VastoWeird",
  "category": "KT",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.34 4.53 L 16.64 5.09 L 20.30 12.57 L 15.66 19.47 L 7.36 18.91 L 3.70 11.43 Z"
      }
    ]
  ]
};

export const VastoWeird = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.34 4.53 L 16.64 5.09 L 20.30 12.57 L 15.66 19.47 L 7.36 18.91 L 3.70 11.43 Z" />
      {children}
    </svg>
  );
});

export default VastoWeird;
