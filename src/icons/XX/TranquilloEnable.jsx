import React from 'react';

export const iconData = {
  "id": "TranquilloEnable",
  "name": "TranquilloEnable",
  "category": "XX",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.58 21.41 L 3.13 15.98 L 3.36 7.55 L 10.10 2.47 L 18.26 4.57 L 21.71 12.26 L 17.85 19.76 Z"
      }
    ]
  ]
};

export const TranquilloEnable = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.58 21.41 L 3.13 15.98 L 3.36 7.55 L 10.10 2.47 L 18.26 4.57 L 21.71 12.26 L 17.85 19.76 Z" />
      {children}
    </svg>
  );
});

export default TranquilloEnable;
