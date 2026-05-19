import React from 'react';

export const iconData = {
  "id": "TurgidoLaptop",
  "name": "TurgidoLaptop",
  "category": "CR",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.09 6.76 L 17.24 18.09 L 5.91 17.24 L 6.76 5.91 Z"
      }
    ]
  ]
};

export const TurgidoLaptop = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.09 6.76 L 17.24 18.09 L 5.91 17.24 L 6.76 5.91 Z" />
      {children}
    </svg>
  );
});

export default TurgidoLaptop;
