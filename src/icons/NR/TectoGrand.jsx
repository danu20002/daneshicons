import React from 'react';

export const iconData = {
  "id": "TectoGrand",
  "name": "TectoGrand",
  "category": "NR",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.33 17.83 L 10.62 21.27 L 3.28 15.44 L 4.67 6.17 L 13.38 2.73 L 20.72 8.56 Z"
      }
    ]
  ]
};

export const TectoGrand = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.33 17.83 L 10.62 21.27 L 3.28 15.44 L 4.67 6.17 L 13.38 2.73 L 20.72 8.56 Z" />
      {children}
    </svg>
  );
});

export default TectoGrand;
