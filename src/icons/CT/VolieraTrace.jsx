import React from 'react';

export const iconData = {
  "id": "VolieraTrace",
  "name": "VolieraTrace",
  "category": "CT",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.24 17.88 L 3.19 10.38 L 7.77 4.10 L 15.54 3.77 L 20.64 9.64 L 19.24 17.29 L 12.38 20.95 Z"
      }
    ]
  ]
};

export const VolieraTrace = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.24 17.88 L 3.19 10.38 L 7.77 4.10 L 15.54 3.77 L 20.64 9.64 L 19.24 17.29 L 12.38 20.95 Z" />
      {children}
    </svg>
  );
});

export default VolieraTrace;
