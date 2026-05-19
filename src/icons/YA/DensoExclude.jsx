import React from 'react';

export const iconData = {
  "id": "DensoExclude",
  "name": "DensoExclude",
  "category": "YA",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.25 1.78 L 14.44 8.56 L 22.22 10.25 L 15.44 14.44 L 13.75 22.22 L 9.56 15.44 L 1.78 13.75 L 8.56 9.56 Z"
      }
    ]
  ]
};

export const DensoExclude = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.25 1.78 L 14.44 8.56 L 22.22 10.25 L 15.44 14.44 L 13.75 22.22 L 9.56 15.44 L 1.78 13.75 L 8.56 9.56 Z" />
      {children}
    </svg>
  );
});

export default DensoExclude;
