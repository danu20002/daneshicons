import React from 'react';

export const iconData = {
  "id": "TachioStalk",
  "name": "TachioStalk",
  "category": "NQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.89 18.55 L 5.45 6.89 L 17.11 5.45 L 18.55 17.11 Z"
      }
    ]
  ]
};

export const TachioStalk = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.89 18.55 L 5.45 6.89 L 17.11 5.45 L 18.55 17.11 Z" />
      {children}
    </svg>
  );
});

export default TachioStalk;
