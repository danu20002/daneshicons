import React from 'react';

export const iconData = {
  "id": "SignoEmbrace",
  "name": "SignoEmbrace",
  "category": "RI",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.74 20.83 L 4.31 16.52 L 3.67 8.81 L 9.30 3.50 L 16.96 4.59 L 20.89 11.26 L 18.12 18.49 Z"
      }
    ]
  ]
};

export const SignoEmbrace = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.74 20.83 L 4.31 16.52 L 3.67 8.81 L 9.30 3.50 L 16.96 4.59 L 20.89 11.26 L 18.12 18.49 Z" />
      {children}
    </svg>
  );
});

export default SignoEmbrace;
