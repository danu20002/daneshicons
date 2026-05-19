import React from 'react';

export const iconData = {
  "id": "VolleyRaft",
  "name": "VolleyRaft",
  "category": "EF",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.41 20.09 L 5.59 17.18 L 3.76 11.84 L 5.79 6.58 L 10.73 3.86 L 16.26 4.94 L 19.80 9.33 L 19.69 14.97 L 15.98 19.22 Z"
      }
    ]
  ]
};

export const VolleyRaft = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.41 20.09 L 5.59 17.18 L 3.76 11.84 L 5.79 6.58 L 10.73 3.86 L 16.26 4.94 L 19.80 9.33 L 19.69 14.97 L 15.98 19.22 Z" />
      {children}
    </svg>
  );
});

export default VolleyRaft;
