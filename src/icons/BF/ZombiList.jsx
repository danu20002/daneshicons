import React from 'react';

export const iconData = {
  "id": "ZombiList",
  "name": "ZombiList",
  "category": "BF",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.17 3.78 L 21.70 12.37 L 16.53 20.59 L 6.83 20.22 L 2.30 11.63 L 7.47 3.41 Z"
      }
    ]
  ]
};

export const ZombiList = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.17 3.78 L 21.70 12.37 L 16.53 20.59 L 6.83 20.22 L 2.30 11.63 L 7.47 3.41 Z" />
      {children}
    </svg>
  );
});

export default ZombiList;
