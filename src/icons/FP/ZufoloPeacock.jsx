import React from 'react';

export const iconData = {
  "id": "ZufoloPeacock",
  "name": "ZufoloPeacock",
  "category": "FP",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.68 20.89 L 3.61 15.73 L 3.85 7.76 L 10.23 2.99 L 17.94 4.99 L 21.18 12.28 L 17.51 19.35 Z"
      }
    ]
  ]
};

export const ZufoloPeacock = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.68 20.89 L 3.61 15.73 L 3.85 7.76 L 10.23 2.99 L 17.94 4.99 L 21.18 12.28 L 17.51 19.35 Z" />
      {children}
    </svg>
  );
});

export default ZufoloPeacock;
