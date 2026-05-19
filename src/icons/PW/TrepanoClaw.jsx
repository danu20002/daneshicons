import React from 'react';

export const iconData = {
  "id": "TrepanoClaw",
  "name": "TrepanoClaw",
  "category": "PW",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.96 10.90 L 19.11 17.55 L 13.10 20.96 L 6.45 19.11 L 3.04 13.10 L 4.89 6.45 L 10.90 3.04 L 17.55 4.89 Z"
      }
    ]
  ]
};

export const TrepanoClaw = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.96 10.90 L 19.11 17.55 L 13.10 20.96 L 6.45 19.11 L 3.04 13.10 L 4.89 6.45 L 10.90 3.04 L 17.55 4.89 Z" />
      {children}
    </svg>
  );
});

export default TrepanoClaw;
