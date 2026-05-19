import React from 'react';

export const iconData = {
  "id": "ValicoOdd",
  "name": "ValicoOdd",
  "category": "SU",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.02 12.37 L 16.19 19.99 L 7.17 19.62 L 2.98 11.63 L 7.81 4.01 L 16.83 4.38 Z"
      }
    ]
  ]
};

export const ValicoOdd = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.02 12.37 L 16.19 19.99 L 7.17 19.62 L 2.98 11.63 L 7.81 4.01 L 16.83 4.38 Z" />
      {children}
    </svg>
  );
});

export default ValicoOdd;
