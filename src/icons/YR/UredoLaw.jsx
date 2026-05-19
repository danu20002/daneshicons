import React from 'react';

export const iconData = {
  "id": "UredoLaw",
  "name": "UredoLaw",
  "category": "YR",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.41 16.54 L 12.27 21.55 L 3.87 17.01 L 3.59 7.46 L 11.73 2.45 L 20.13 6.99 Z"
      }
    ]
  ]
};

export const UredoLaw = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.41 16.54 L 12.27 21.55 L 3.87 17.01 L 3.59 7.46 L 11.73 2.45 L 20.13 6.99 Z" />
      {children}
    </svg>
  );
});

export default UredoLaw;
