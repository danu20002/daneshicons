import React from 'react';

export const iconData = {
  "id": "TumidoSmall",
  "name": "TumidoSmall",
  "category": "LN",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.91 10.54 L 10.58 2.91 L 20.21 7.84 L 18.49 18.52 L 7.80 20.19 Z"
      }
    ]
  ]
};

export const TumidoSmall = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.91 10.54 L 10.58 2.91 L 20.21 7.84 L 18.49 18.52 L 7.80 20.19 Z" />
      {children}
    </svg>
  );
});

export default TumidoSmall;
