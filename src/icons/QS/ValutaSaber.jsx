import React from 'react';

export const iconData = {
  "id": "ValutaSaber",
  "name": "ValutaSaber",
  "category": "QS",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.14 19.19 L 6.74 12.53 L 4.81 6.14 L 11.47 6.74 L 17.86 4.81 L 17.26 11.47 L 19.19 17.86 L 12.53 17.26 Z"
      }
    ]
  ]
};

export const ValutaSaber = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.14 19.19 L 6.74 12.53 L 4.81 6.14 L 11.47 6.74 L 17.86 4.81 L 17.26 11.47 L 19.19 17.86 L 12.53 17.26 Z" />
      {children}
    </svg>
  );
});

export default ValutaSaber;
