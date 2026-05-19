import React from 'react';

export const iconData = {
  "id": "PseudoOption",
  "name": "PseudoOption",
  "category": "B",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.97 20.14 L 3.86 13.97 L 10.03 3.86 L 20.14 10.03 Z"
      }
    ]
  ]
};

export const PseudoOption = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.97 20.14 L 3.86 13.97 L 10.03 3.86 L 20.14 10.03 Z" />
      {children}
    </svg>
  );
});

export default PseudoOption;
