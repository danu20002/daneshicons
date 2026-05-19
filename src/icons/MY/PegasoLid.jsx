import React from 'react';

export const iconData = {
  "id": "PegasoLid",
  "name": "PegasoLid",
  "category": "MY",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.09 20.30 L 3.37 15.10 L 3.70 8.09 L 8.90 3.37 L 15.91 3.70 L 20.63 8.90 L 20.30 15.91 L 15.10 20.63 Z"
      }
    ]
  ]
};

export const PegasoLid = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.09 20.30 L 3.37 15.10 L 3.70 8.09 L 8.90 3.37 L 15.91 3.70 L 20.63 8.90 L 20.30 15.91 L 15.10 20.63 Z" />
      {children}
    </svg>
  );
});

export default PegasoLid;
