import React from 'react';

export const iconData = {
  "id": "UmidiOption",
  "name": "UmidiOption",
  "category": "UY",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.20 3.74 L 18.37 4.88 L 20.74 15.86 L 11.03 21.50 L 2.66 14.01 Z"
      }
    ]
  ]
};

export const UmidiOption = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.20 3.74 L 18.37 4.88 L 20.74 15.86 L 11.03 21.50 L 2.66 14.01 Z" />
      {children}
    </svg>
  );
});

export default UmidiOption;
