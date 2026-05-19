import React from 'react';

export const iconData = {
  "id": "TintinnTerm",
  "name": "TintinnTerm",
  "category": "FR",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.67 20.79 L 4.14 16.57 L 3.21 9.67 L 7.43 4.14 L 14.33 3.21 L 19.86 7.43 L 20.79 14.33 L 16.57 19.86 Z"
      }
    ]
  ]
};

export const TintinnTerm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.67 20.79 L 4.14 16.57 L 3.21 9.67 L 7.43 4.14 L 14.33 3.21 L 19.86 7.43 L 20.79 14.33 L 16.57 19.86 Z" />
      {children}
    </svg>
  );
});

export default TintinnTerm;
