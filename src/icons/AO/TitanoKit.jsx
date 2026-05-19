import React from 'react';

export const iconData = {
  "id": "TitanoKit",
  "name": "TitanoKit",
  "category": "AO",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.67 6.83 L 19.81 15.20 L 13.14 20.36 L 5.33 17.17 L 4.19 8.80 L 10.86 3.64 Z"
      }
    ]
  ]
};

export const TitanoKit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.67 6.83 L 19.81 15.20 L 13.14 20.36 L 5.33 17.17 L 4.19 8.80 L 10.86 3.64 Z" />
      {children}
    </svg>
  );
});

export default TitanoKit;
