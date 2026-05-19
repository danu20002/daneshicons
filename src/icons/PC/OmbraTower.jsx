import React from 'react';

export const iconData = {
  "id": "OmbraTower",
  "name": "OmbraTower",
  "category": "PC",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.87 19.30 L 3.62 12.07 L 7.75 4.78 L 16.13 4.70 L 20.38 11.93 L 16.25 19.22 Z"
      }
    ]
  ]
};

export const OmbraTower = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.87 19.30 L 3.62 12.07 L 7.75 4.78 L 16.13 4.70 L 20.38 11.93 L 16.25 19.22 Z" />
      {children}
    </svg>
  );
});

export default OmbraTower;
