import React from 'react';

export const iconData = {
  "id": "TephroSlug",
  "name": "TephroSlug",
  "category": "QO",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.27 11.32 L 17.22 19.68 L 7.96 20.37 L 2.73 12.68 L 6.78 4.32 L 16.04 3.63 Z"
      }
    ]
  ]
};

export const TephroSlug = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.27 11.32 L 17.22 19.68 L 7.96 20.37 L 2.73 12.68 L 6.78 4.32 L 16.04 3.63 Z" />
      {children}
    </svg>
  );
});

export default TephroSlug;
