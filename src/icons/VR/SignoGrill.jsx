import React from 'react';

export const iconData = {
  "id": "SignoGrill",
  "name": "SignoGrill",
  "category": "VR",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.45 5.62 L 20.75 14.40 L 14.30 20.78 L 5.55 18.38 L 3.25 9.60 L 9.70 3.22 Z"
      }
    ]
  ]
};

export const SignoGrill = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.45 5.62 L 20.75 14.40 L 14.30 20.78 L 5.55 18.38 L 3.25 9.60 L 9.70 3.22 Z" />
      {children}
    </svg>
  );
});

export default SignoGrill;
