import React from 'react';

export const iconData = {
  "id": "VulpinTennis",
  "name": "VulpinTennis",
  "category": "ST",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.86 6.57 L 11.49 3.82 L 17.43 5.86 L 20.18 11.49 L 18.14 17.43 L 12.51 20.18 L 6.57 18.14 L 3.82 12.51 Z"
      }
    ]
  ]
};

export const VulpinTennis = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.86 6.57 L 11.49 3.82 L 17.43 5.86 L 20.18 11.49 L 18.14 17.43 L 12.51 20.18 L 6.57 18.14 L 3.82 12.51 Z" />
      {children}
    </svg>
  );
});

export default VulpinTennis;
