import React from 'react';

export const iconData = {
  "id": "MassoOffense",
  "name": "MassoOffense",
  "category": "XG",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.86 21.90 L 10.16 16.18 L 2.10 15.86 L 7.82 10.16 L 8.14 2.10 L 13.84 7.82 L 21.90 8.14 L 16.18 13.84 Z"
      }
    ]
  ]
};

export const MassoOffense = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.86 21.90 L 10.16 16.18 L 2.10 15.86 L 7.82 10.16 L 8.14 2.10 L 13.84 7.82 L 21.90 8.14 L 16.18 13.84 Z" />
      {children}
    </svg>
  );
});

export default MassoOffense;
