import React from 'react';

export const iconData = {
  "id": "BioPetition",
  "name": "BioPetition",
  "category": "ZK",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.06 20.61 L 3.44 15.07 L 4.26 7.22 L 10.91 2.97 L 18.38 5.52 L 21.05 12.95 L 16.90 19.66 Z"
      }
    ]
  ]
};

export const BioPetition = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.06 20.61 L 3.44 15.07 L 4.26 7.22 L 10.91 2.97 L 18.38 5.52 L 21.05 12.95 L 16.90 19.66 Z" />
      {children}
    </svg>
  );
});

export default BioPetition;
