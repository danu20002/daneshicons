import React from 'react';

export const iconData = {
  "id": "PantoLogic",
  "name": "PantoLogic",
  "category": "KA",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.44 20.08 L 3.92 13.44 L 10.56 3.92 L 20.08 10.56 Z"
      }
    ]
  ]
};

export const PantoLogic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.44 20.08 L 3.92 13.44 L 10.56 3.92 L 20.08 10.56 Z" />
      {children}
    </svg>
  );
});

export default PantoLogic;
