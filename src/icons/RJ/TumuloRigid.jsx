import React from 'react';

export const iconData = {
  "id": "TumuloRigid",
  "name": "TumuloRigid",
  "category": "RJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.28 3.98 L 14.30 3.46 L 19.25 6.94 L 20.81 12.79 L 18.24 18.26 L 12.75 20.81 L 6.91 19.23 L 3.45 14.27 L 3.99 8.25 Z"
      }
    ]
  ]
};

export const TumuloRigid = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.28 3.98 L 14.30 3.46 L 19.25 6.94 L 20.81 12.79 L 18.24 18.26 L 12.75 20.81 L 6.91 19.23 L 3.45 14.27 L 3.99 8.25 Z" />
      {children}
    </svg>
  );
});

export default TumuloRigid;
