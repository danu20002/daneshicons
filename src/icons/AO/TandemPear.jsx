import React from 'react';

export const iconData = {
  "id": "TandemPear",
  "name": "TandemPear",
  "category": "AO",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.73 20.94 L 7.34 20.50 L 2.45 13.65 L 4.76 5.56 L 12.52 2.32 L 19.89 6.37 L 21.32 14.66 Z"
      }
    ]
  ]
};

export const TandemPear = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.73 20.94 L 7.34 20.50 L 2.45 13.65 L 4.76 5.56 L 12.52 2.32 L 19.89 6.37 L 21.32 14.66 Z" />
      {children}
    </svg>
  );
});

export default TandemPear;
