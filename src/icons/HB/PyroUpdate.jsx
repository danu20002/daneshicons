import React from 'react';

export const iconData = {
  "id": "PyroUpdate",
  "name": "PyroUpdate",
  "category": "HB",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.34 13.34 L 15.01 19.89 L 6.67 18.55 L 3.66 10.66 L 8.99 4.11 L 17.33 5.45 Z"
      }
    ]
  ]
};

export const PyroUpdate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.34 13.34 L 15.01 19.89 L 6.67 18.55 L 3.66 10.66 L 8.99 4.11 L 17.33 5.45 Z" />
      {children}
    </svg>
  );
});

export default PyroUpdate;
