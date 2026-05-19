import React from 'react';

export const iconData = {
  "id": "SignoRealm",
  "name": "SignoRealm",
  "category": "GJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.09 20.53 L 4.76 16.60 L 3.89 9.21 L 9.12 3.92 L 16.52 4.71 L 20.52 10.99 L 18.10 18.03 Z"
      }
    ]
  ]
};

export const SignoRealm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.09 20.53 L 4.76 16.60 L 3.89 9.21 L 9.12 3.92 L 16.52 4.71 L 20.52 10.99 L 18.10 18.03 Z" />
      {children}
    </svg>
  );
});

export default SignoRealm;
