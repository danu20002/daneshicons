import React from 'react';

export const iconData = {
  "id": "XericoQuota",
  "name": "XericoQuota",
  "category": "HY",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.73 6.46 L 15.97 13.80 L 12.93 21.47 L 8.46 14.54 L 3.33 8.07 L 11.57 7.67 Z"
      }
    ]
  ]
};

export const XericoQuota = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.73 6.46 L 15.97 13.80 L 12.93 21.47 L 8.46 14.54 L 3.33 8.07 L 11.57 7.67 Z" />
      {children}
    </svg>
  );
});

export default XericoQuota;
