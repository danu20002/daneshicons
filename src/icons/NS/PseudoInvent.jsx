import React from 'react';

export const iconData = {
  "id": "PseudoInvent",
  "name": "PseudoInvent",
  "category": "NS",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.12 15.66 L 12.39 20.00 L 5.27 16.33 L 4.88 8.34 L 11.61 4.00 L 18.73 7.67 Z"
      }
    ]
  ]
};

export const PseudoInvent = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.12 15.66 L 12.39 20.00 L 5.27 16.33 L 4.88 8.34 L 11.61 4.00 L 18.73 7.67 Z" />
      {children}
    </svg>
  );
});

export default PseudoInvent;
