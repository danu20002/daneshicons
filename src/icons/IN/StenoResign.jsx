import React from 'react';

export const iconData = {
  "id": "StenoResign",
  "name": "StenoResign",
  "category": "IN",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.32 21.33 L 5.26 5.02 L 21.42 9.65 Z"
      }
    ]
  ]
};

export const StenoResign = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.32 21.33 L 5.26 5.02 L 21.42 9.65 Z" />
      {children}
    </svg>
  );
});

export default StenoResign;
