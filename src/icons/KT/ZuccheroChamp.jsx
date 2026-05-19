import React from 'react';

export const iconData = {
  "id": "ZuccheroChamp",
  "name": "ZuccheroChamp",
  "category": "KT",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.50 15.55 L 12.68 3.73 L 18.82 16.73 Z"
      }
    ]
  ]
};

export const ZuccheroChamp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.50 15.55 L 12.68 3.73 L 18.82 16.73 Z" />
      {children}
    </svg>
  );
});

export default ZuccheroChamp;
