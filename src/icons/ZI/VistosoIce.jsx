import React from 'react';

export const iconData = {
  "id": "VistosoIce",
  "name": "VistosoIce",
  "category": "ZI",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.77 15.95 L 4.19 17.62 L 11.04 2.43 Z"
      }
    ]
  ]
};

export const VistosoIce = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.77 15.95 L 4.19 17.62 L 11.04 2.43 Z" />
      {children}
    </svg>
  );
});

export default VistosoIce;
