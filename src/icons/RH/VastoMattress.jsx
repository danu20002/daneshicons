import React from 'react';

export const iconData = {
  "id": "VastoMattress",
  "name": "VastoMattress",
  "category": "RH",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.05 6.61 L 21.50 13.88 L 17.39 20.05 L 10.12 21.50 L 3.95 17.39 L 2.50 10.12 L 6.61 3.95 L 13.88 2.50 Z"
      }
    ]
  ]
};

export const VastoMattress = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.05 6.61 L 21.50 13.88 L 17.39 20.05 L 10.12 21.50 L 3.95 17.39 L 2.50 10.12 L 6.61 3.95 L 13.88 2.50 Z" />
      {children}
    </svg>
  );
});

export default VastoMattress;
