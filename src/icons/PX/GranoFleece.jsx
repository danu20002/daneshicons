import React from 'react';

export const iconData = {
  "id": "GranoFleece",
  "name": "GranoFleece",
  "category": "PX",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.61 19.59 L 2.71 12.52 L 5.80 5.06 L 13.56 2.82 L 20.15 7.50 L 20.60 15.56 L 14.57 20.95 Z"
      }
    ]
  ]
};

export const GranoFleece = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.61 19.59 L 2.71 12.52 L 5.80 5.06 L 13.56 2.82 L 20.15 7.50 L 20.60 15.56 L 14.57 20.95 Z" />
      {children}
    </svg>
  );
});

export default GranoFleece;
