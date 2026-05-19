import React from 'react';

export const iconData = {
  "id": "PhiloReact",
  "name": "PhiloReact",
  "category": "YR",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.00 18.09 L 13.45 21.17 L 7.21 19.95 L 3.22 15.02 L 3.34 8.67 L 7.51 3.88 L 13.78 2.89 L 19.22 6.16 L 21.28 12.17 Z"
      }
    ]
  ]
};

export const PhiloReact = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.00 18.09 L 13.45 21.17 L 7.21 19.95 L 3.22 15.02 L 3.34 8.67 L 7.51 3.88 L 13.78 2.89 L 19.22 6.16 L 21.28 12.17 Z" />
      {children}
    </svg>
  );
});

export default PhiloReact;
