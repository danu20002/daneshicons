import React from 'react';

export const iconData = {
  "id": "HaloSaga",
  "name": "HaloSaga",
  "category": "PW",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.04 3.25 L 17.62 5.02 L 20.96 12.04 L 17.56 19.03 L 9.97 20.73 L 3.91 15.85 L 3.94 8.08 Z"
      }
    ]
  ]
};

export const HaloSaga = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.04 3.25 L 17.62 5.02 L 20.96 12.04 L 17.56 19.03 L 9.97 20.73 L 3.91 15.85 L 3.94 8.08 Z" />
      {children}
    </svg>
  );
});

export default HaloSaga;
