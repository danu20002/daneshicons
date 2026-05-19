import React from 'react';

export const iconData = {
  "id": "SynoProwl",
  "name": "SynoProwl",
  "category": "CS",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.79 21.92 L 4.74 18.80 L 2.15 10.56 L 6.98 3.41 L 15.59 2.72 L 21.50 9.02 L 20.25 17.57 Z"
      }
    ]
  ]
};

export const SynoProwl = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.79 21.92 L 4.74 18.80 L 2.15 10.56 L 6.98 3.41 L 15.59 2.72 L 21.50 9.02 L 20.25 17.57 Z" />
      {children}
    </svg>
  );
});

export default SynoProwl;
