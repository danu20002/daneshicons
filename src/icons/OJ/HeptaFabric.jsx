import React from 'react';

export const iconData = {
  "id": "HeptaFabric",
  "name": "HeptaFabric",
  "category": "OJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.59 21.83 L 4.76 18.66 L 2.17 11.59 L 5.34 4.76 L 12.41 2.17 L 19.24 5.34 L 21.83 12.41 L 18.66 19.24 Z"
      }
    ]
  ]
};

export const HeptaFabric = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.59 21.83 L 4.76 18.66 L 2.17 11.59 L 5.34 4.76 L 12.41 2.17 L 19.24 5.34 L 21.83 12.41 L 18.66 19.24 Z" />
      {children}
    </svg>
  );
});

export default HeptaFabric;
