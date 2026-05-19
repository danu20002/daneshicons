import React from 'react';

export const iconData = {
  "id": "ZefiroMember",
  "name": "ZefiroMember",
  "category": "UF",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.54 3.40 L 21.22 10.76 L 17.68 19.37 L 8.46 20.60 L 2.78 13.24 L 6.32 4.63 Z"
      }
    ]
  ]
};

export const ZefiroMember = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.54 3.40 L 21.22 10.76 L 17.68 19.37 L 8.46 20.60 L 2.78 13.24 L 6.32 4.63 Z" />
      {children}
    </svg>
  );
});

export default ZefiroMember;
