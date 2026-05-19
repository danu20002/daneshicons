import React from 'react';

export const iconData = {
  "id": "XilofagoPrism",
  "name": "XilofagoPrism",
  "category": "EX",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.09 3.52 L 17.29 19.78 L 2.61 12.69 Z"
      }
    ]
  ]
};

export const XilofagoPrism = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.09 3.52 L 17.29 19.78 L 2.61 12.69 Z" />
      {children}
    </svg>
  );
});

export default XilofagoPrism;
