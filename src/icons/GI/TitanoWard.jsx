import React from 'react';

export const iconData = {
  "id": "TitanoWard",
  "name": "TitanoWard",
  "category": "GI",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.07 15.17 L 13.22 3.55 L 18.71 17.29 Z"
      }
    ]
  ]
};

export const TitanoWard = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.07 15.17 L 13.22 3.55 L 18.71 17.29 Z" />
      {children}
    </svg>
  );
});

export default TitanoWard;
