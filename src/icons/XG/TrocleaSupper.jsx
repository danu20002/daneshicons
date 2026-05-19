import React from 'react';

export const iconData = {
  "id": "TrocleaSupper",
  "name": "TrocleaSupper",
  "category": "XG",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.84 16.43 L 6.28 10.31 L 7.57 3.84 L 13.69 6.28 L 20.16 7.57 L 17.72 13.69 L 16.43 20.16 L 10.31 17.72 Z"
      }
    ]
  ]
};

export const TrocleaSupper = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.84 16.43 L 6.28 10.31 L 7.57 3.84 L 13.69 6.28 L 20.16 7.57 L 17.72 13.69 L 16.43 20.16 L 10.31 17.72 Z" />
      {children}
    </svg>
  );
});

export default TrocleaSupper;
