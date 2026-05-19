import React from 'react';

export const iconData = {
  "id": "DracoSquid",
  "name": "DracoSquid",
  "category": "EE",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.84 19.85 L 3.25 10.47 L 10.75 3.21 L 19.98 8.09 L 18.18 18.38 Z"
      }
    ]
  ]
};

export const DracoSquid = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.84 19.85 L 3.25 10.47 L 10.75 3.21 L 19.98 8.09 L 18.18 18.38 Z" />
      {children}
    </svg>
  );
});

export default DracoSquid;
