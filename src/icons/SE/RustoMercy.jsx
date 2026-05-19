import React from 'react';

export const iconData = {
  "id": "RustoMercy",
  "name": "RustoMercy",
  "category": "SE",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.39 21.42 L 8.98 17.07 L 2.58 14.39 L 6.93 8.98 L 9.61 2.58 L 15.02 6.93 L 21.42 9.61 L 17.07 15.02 Z"
      }
    ]
  ]
};

export const RustoMercy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.39 21.42 L 8.98 17.07 L 2.58 14.39 L 6.93 8.98 L 9.61 2.58 L 15.02 6.93 L 21.42 9.61 L 17.07 15.02 Z" />
      {children}
    </svg>
  );
});

export default RustoMercy;
