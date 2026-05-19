import React from 'react';

export const iconData = {
  "id": "UmbroPan",
  "name": "UmbroPan",
  "category": "AO",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.44 17.28 L 3.78 10.17 L 8.31 4.43 L 15.61 4.40 L 20.20 10.09 L 18.61 17.22 L 12.04 20.42 Z"
      }
    ]
  ]
};

export const UmbroPan = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.44 17.28 L 3.78 10.17 L 8.31 4.43 L 15.61 4.40 L 20.20 10.09 L 18.61 17.22 L 12.04 20.42 Z" />
      {children}
    </svg>
  );
});

export default UmbroPan;
