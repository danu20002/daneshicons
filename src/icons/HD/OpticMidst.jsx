import React from 'react';

export const iconData = {
  "id": "OpticMidst",
  "name": "OpticMidst",
  "category": "HD",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.69 7.38 L 21.41 14.88 L 16.62 20.69 L 9.12 21.41 L 3.31 16.62 L 2.59 9.12 L 7.38 3.31 L 14.88 2.59 Z"
      }
    ]
  ]
};

export const OpticMidst = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.69 7.38 L 21.41 14.88 L 16.62 20.69 L 9.12 21.41 L 3.31 16.62 L 2.59 9.12 L 7.38 3.31 L 14.88 2.59 Z" />
      {children}
    </svg>
  );
});

export default OpticMidst;
