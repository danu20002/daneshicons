import React from 'react';

export const iconData = {
  "id": "SynaptoPopcorn",
  "name": "SynaptoPopcorn",
  "category": "X",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.24 21.26 L 9.59 14.80 L 2.36 10.18 L 10.78 8.51 L 18.40 4.56 L 15.63 12.69 Z"
      }
    ]
  ]
};

export const SynaptoPopcorn = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.24 21.26 L 9.59 14.80 L 2.36 10.18 L 10.78 8.51 L 18.40 4.56 L 15.63 12.69 Z" />
      {children}
    </svg>
  );
});

export default SynaptoPopcorn;
