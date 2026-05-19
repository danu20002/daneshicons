import React from 'react';

export const iconData = {
  "id": "PseudoDesign",
  "name": "PseudoDesign",
  "category": "A",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.79 15.41 L 3.59 6.92 L 10.73 2.26 L 18.82 4.93 L 21.78 12.93 L 17.37 20.22 L 8.92 21.33 Z"
      }
    ]
  ]
};

export const PseudoDesign = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.79 15.41 L 3.59 6.92 L 10.73 2.26 L 18.82 4.93 L 21.78 12.93 L 17.37 20.22 L 8.92 21.33 Z" />
      {children}
    </svg>
  );
});

export default PseudoDesign;
