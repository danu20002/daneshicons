import React from 'react';

export const iconData = {
  "id": "UbertoProxy",
  "name": "UbertoProxy",
  "category": "FT",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.86 1.91 L 16.24 7.88 L 22.17 9.43 L 17.69 13.61 L 19.31 19.52 L 13.45 17.73 L 9.14 22.09 L 7.76 16.12 L 1.83 14.57 L 6.31 10.39 L 4.69 4.48 L 10.55 6.27 Z"
      }
    ]
  ]
};

export const UbertoProxy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.86 1.91 L 16.24 7.88 L 22.17 9.43 L 17.69 13.61 L 19.31 19.52 L 13.45 17.73 L 9.14 22.09 L 7.76 16.12 L 1.83 14.57 L 6.31 10.39 L 4.69 4.48 L 10.55 6.27 Z" />
      {children}
    </svg>
  );
});

export default UbertoProxy;
