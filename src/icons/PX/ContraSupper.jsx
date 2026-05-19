import React from 'react';

export const iconData = {
  "id": "ContraSupper",
  "name": "ContraSupper",
  "category": "PX",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.40 5.44 L 13.39 4.11 L 18.56 7.40 L 19.89 13.39 L 16.60 18.56 L 10.61 19.89 L 5.44 16.60 L 4.11 10.61 Z"
      }
    ]
  ]
};

export const ContraSupper = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.40 5.44 L 13.39 4.11 L 18.56 7.40 L 19.89 13.39 L 16.60 18.56 L 10.61 19.89 L 5.44 16.60 L 4.11 10.61 Z" />
      {children}
    </svg>
  );
});

export default ContraSupper;
