import React from 'react';

export const iconData = {
  "id": "VistosoLicense",
  "name": "VistosoLicense",
  "category": "HB",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.99 3.99 L 18.95 16.00 L 5.06 16.02 Z"
      }
    ]
  ]
};

export const VistosoLicense = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.99 3.99 L 18.95 16.00 L 5.06 16.02 Z" />
      {children}
    </svg>
  );
});

export default VistosoLicense;
