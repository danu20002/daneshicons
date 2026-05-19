import React from 'react';

export const iconData = {
  "id": "RegulaFilter",
  "name": "RegulaFilter",
  "category": "SU",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.99 7.42 L 20.56 15.39 L 14.68 20.81 L 6.79 19.59 L 2.81 12.66 L 5.76 5.23 L 13.40 2.90 Z"
      }
    ]
  ]
};

export const RegulaFilter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.99 7.42 L 20.56 15.39 L 14.68 20.81 L 6.79 19.59 L 2.81 12.66 L 5.76 5.23 L 13.40 2.90 Z" />
      {children}
    </svg>
  );
});

export default RegulaFilter;
