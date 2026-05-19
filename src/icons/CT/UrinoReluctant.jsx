import React from 'react';

export const iconData = {
  "id": "UrinoReluctant",
  "name": "UrinoReluctant",
  "category": "CT",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.43 13.00 L 5.87 5.92 L 12.93 3.42 L 19.29 7.38 L 20.16 14.82 L 14.88 20.14 L 7.44 19.32 Z"
      }
    ]
  ]
};

export const UrinoReluctant = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.43 13.00 L 5.87 5.92 L 12.93 3.42 L 19.29 7.38 L 20.16 14.82 L 14.88 20.14 L 7.44 19.32 Z" />
      {children}
    </svg>
  );
});

export default UrinoReluctant;
