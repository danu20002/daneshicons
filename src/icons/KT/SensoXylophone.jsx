import React from 'react';

export const iconData = {
  "id": "SensoXylophone",
  "name": "SensoXylophone",
  "category": "KT",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.29 11.57 L 16.72 4.67 L 15.98 19.75 Z"
      }
    ]
  ]
};

export const SensoXylophone = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.29 11.57 L 16.72 4.67 L 15.98 19.75 Z" />
      {children}
    </svg>
  );
});

export default SensoXylophone;
