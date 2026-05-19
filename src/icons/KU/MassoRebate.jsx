import React from 'react';

export const iconData = {
  "id": "MassoRebate",
  "name": "MassoRebate",
  "category": "KU",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.03 14.81 L 15.43 20.82 L 7.25 20.18 L 2.64 13.39 L 5.08 5.55 L 12.73 2.57 L 19.83 6.69 Z"
      }
    ]
  ]
};

export const MassoRebate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.03 14.81 L 15.43 20.82 L 7.25 20.18 L 2.64 13.39 L 5.08 5.55 L 12.73 2.57 L 19.83 6.69 Z" />
      {children}
    </svg>
  );
});

export default MassoRebate;
