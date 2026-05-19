import React from 'react';

export const iconData = {
  "id": "NephroOtter",
  "name": "NephroOtter",
  "category": "BZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.71 3.61 L 18.65 5.33 L 20.40 16.26 L 10.54 21.31 L 2.70 13.49 Z"
      }
    ]
  ]
};

export const NephroOtter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.71 3.61 L 18.65 5.33 L 20.40 16.26 L 10.54 21.31 L 2.70 13.49 Z" />
      {children}
    </svg>
  );
});

export default NephroOtter;
