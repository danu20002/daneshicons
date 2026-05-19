import React from 'react';

export const iconData = {
  "id": "PrimoTutor",
  "name": "PrimoTutor",
  "category": "UF",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.42 3.26 L 15.97 2.97 L 21.54 9.48 L 19.92 17.88 L 12.34 21.86 L 4.50 18.41 L 2.31 10.13 Z"
      }
    ]
  ]
};

export const PrimoTutor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.42 3.26 L 15.97 2.97 L 21.54 9.48 L 19.92 17.88 L 12.34 21.86 L 4.50 18.41 L 2.31 10.13 Z" />
      {children}
    </svg>
  );
});

export default PrimoTutor;
