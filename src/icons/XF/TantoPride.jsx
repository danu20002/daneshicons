import React from 'react';

export const iconData = {
  "id": "TantoPride",
  "name": "TantoPride",
  "category": "XF",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.27 15.92 L 3.49 7.62 L 10.12 2.62 L 18.16 4.68 L 21.56 12.26 L 17.76 19.64 L 9.62 21.27 Z"
      }
    ]
  ]
};

export const TantoPride = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.27 15.92 L 3.49 7.62 L 10.12 2.62 L 18.16 4.68 L 21.56 12.26 L 17.76 19.64 L 9.62 21.27 Z" />
      {children}
    </svg>
  );
});

export default TantoPride;
