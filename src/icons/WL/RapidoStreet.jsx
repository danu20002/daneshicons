import React from 'react';

export const iconData = {
  "id": "RapidoStreet",
  "name": "RapidoStreet",
  "category": "WL",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.93 17.93 L 6.07 5.93 L 18.07 6.07 L 17.93 18.07 Z"
      }
    ]
  ]
};

export const RapidoStreet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.93 17.93 L 6.07 5.93 L 18.07 6.07 L 17.93 18.07 Z" />
      {children}
    </svg>
  );
});

export default RapidoStreet;
