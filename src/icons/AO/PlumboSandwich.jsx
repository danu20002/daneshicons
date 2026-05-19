import React from 'react';

export const iconData = {
  "id": "PlumboSandwich",
  "name": "PlumboSandwich",
  "category": "AO",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.72 20.51 L 3.93 15.52 L 4.21 7.88 L 10.37 3.34 L 17.75 5.33 L 20.80 12.33 L 17.23 19.09 Z"
      }
    ]
  ]
};

export const PlumboSandwich = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.72 20.51 L 3.93 15.52 L 4.21 7.88 L 10.37 3.34 L 17.75 5.33 L 20.80 12.33 L 17.23 19.09 Z" />
      {children}
    </svg>
  );
});

export default PlumboSandwich;
