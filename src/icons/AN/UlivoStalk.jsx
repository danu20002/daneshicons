import React from 'react';

export const iconData = {
  "id": "UlivoStalk",
  "name": "UlivoStalk",
  "category": "AN",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.95 18.90 L 9.55 2.44 L 21.50 14.66 Z"
      }
    ]
  ]
};

export const UlivoStalk = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.95 18.90 L 9.55 2.44 L 21.50 14.66 Z" />
      {children}
    </svg>
  );
});

export default UlivoStalk;
