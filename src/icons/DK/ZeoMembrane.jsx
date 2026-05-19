import React from 'react';

export const iconData = {
  "id": "ZeoMembrane",
  "name": "ZeoMembrane",
  "category": "DK",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.52 5.02 L 20.89 11.96 L 17.57 18.93 L 10.06 20.68 L 4.00 15.89 L 3.97 8.18 L 9.98 3.34 Z"
      }
    ]
  ]
};

export const ZeoMembrane = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.52 5.02 L 20.89 11.96 L 17.57 18.93 L 10.06 20.68 L 4.00 15.89 L 3.97 8.18 L 9.98 3.34 Z" />
      {children}
    </svg>
  );
});

export default ZeoMembrane;
