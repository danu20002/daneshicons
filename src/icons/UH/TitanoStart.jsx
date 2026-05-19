import React from 'react';

export const iconData = {
  "id": "TitanoStart",
  "name": "TitanoStart",
  "category": "UH",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.62 3.56 L 16.99 5.06 L 20.44 10.62 L 18.94 16.99 L 13.38 20.44 L 7.01 18.94 L 3.56 13.38 L 5.06 7.01 Z"
      }
    ]
  ]
};

export const TitanoStart = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.62 3.56 L 16.99 5.06 L 20.44 10.62 L 18.94 16.99 L 13.38 20.44 L 7.01 18.94 L 3.56 13.38 L 5.06 7.01 Z" />
      {children}
    </svg>
  );
});

export default TitanoStart;
