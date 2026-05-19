import React from 'react';

export const iconData = {
  "id": "SextoDrum",
  "name": "SextoDrum",
  "category": "SA",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.99 19.53 L 4.47 8.99 L 15.01 4.47 L 19.53 15.01 Z"
      }
    ]
  ]
};

export const SextoDrum = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.99 19.53 L 4.47 8.99 L 15.01 4.47 L 19.53 15.01 Z" />
      {children}
    </svg>
  );
});

export default SextoDrum;
