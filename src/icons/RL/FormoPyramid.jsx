import React from 'react';

export const iconData = {
  "id": "FormoPyramid",
  "name": "FormoPyramid",
  "category": "RL",
  "nodes": [
    [
      "path",
      {
        "d": "M 1.74 13.85 L 9.08 8.55 L 15.53 2.19 L 16.45 11.20 L 18.73 19.96 L 10.47 16.25 Z"
      }
    ]
  ]
};

export const FormoPyramid = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 1.74 13.85 L 9.08 8.55 L 15.53 2.19 L 16.45 11.20 L 18.73 19.96 L 10.47 16.25 Z" />
      {children}
    </svg>
  );
});

export default FormoPyramid;
