import React from 'react';

export const iconData = {
  "id": "IgniLeather",
  "name": "IgniLeather",
  "category": "MX",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.44 18.61 L 3.99 12.55 L 6.57 6.08 L 13.24 4.07 L 18.98 8.03 L 19.46 14.98 L 14.32 19.69 Z"
      }
    ]
  ]
};

export const IgniLeather = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.44 18.61 L 3.99 12.55 L 6.57 6.08 L 13.24 4.07 L 18.98 8.03 L 19.46 14.98 L 14.32 19.69 Z" />
      {children}
    </svg>
  );
});

export default IgniLeather;
