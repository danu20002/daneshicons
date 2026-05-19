import React from 'react';

export const iconData = {
  "id": "IcosaCrisp",
  "name": "IcosaCrisp",
  "category": "OL",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.97 17.36 L 12.43 20.01 L 6.64 17.97 L 3.99 12.43 L 6.03 6.64 L 11.57 3.99 L 17.36 6.03 L 20.01 11.57 Z"
      }
    ]
  ]
};

export const IcosaCrisp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.97 17.36 L 12.43 20.01 L 6.64 17.97 L 3.99 12.43 L 6.03 6.64 L 11.57 3.99 L 17.36 6.03 L 20.01 11.57 Z" />
      {children}
    </svg>
  );
});

export default IcosaCrisp;
