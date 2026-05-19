import React from 'react';

export const iconData = {
  "id": "SensoGerm",
  "name": "SensoGerm",
  "category": "HC",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.64 19.26 L 4.23 13.90 L 5.67 7.11 L 11.87 4.00 L 18.18 6.91 L 19.83 13.66 L 15.59 19.15 Z"
      }
    ]
  ]
};

export const SensoGerm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.64 19.26 L 4.23 13.90 L 5.67 7.11 L 11.87 4.00 L 18.18 6.91 L 19.83 13.66 L 15.59 19.15 Z" />
      {children}
    </svg>
  );
});

export default SensoGerm;
