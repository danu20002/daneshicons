import React from 'react';

export const iconData = {
  "id": "ZefiroKeen",
  "name": "ZefiroKeen",
  "category": "MF",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.69 20.12 L 4.62 16.11 L 3.88 9.69 L 7.89 4.62 L 14.31 3.88 L 19.38 7.89 L 20.12 14.31 L 16.11 19.38 Z"
      }
    ]
  ]
};

export const ZefiroKeen = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.69 20.12 L 4.62 16.11 L 3.88 9.69 L 7.89 4.62 L 14.31 3.88 L 19.38 7.89 L 20.12 14.31 L 16.11 19.38 Z" />
      {children}
    </svg>
  );
});

export default ZefiroKeen;
