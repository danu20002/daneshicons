import React from 'react';

export const iconData = {
  "id": "PhysioCauldron",
  "name": "PhysioCauldron",
  "category": "XF",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.48 3.44 L 18.99 7.04 L 20.24 14.37 L 15.29 19.92 L 7.86 19.51 L 3.55 13.44 L 5.60 6.29 Z"
      }
    ]
  ]
};

export const PhysioCauldron = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.48 3.44 L 18.99 7.04 L 20.24 14.37 L 15.29 19.92 L 7.86 19.51 L 3.55 13.44 L 5.60 6.29 Z" />
      {children}
    </svg>
  );
});

export default PhysioCauldron;
