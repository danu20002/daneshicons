import React from 'react';

export const iconData = {
  "id": "FidoJob",
  "name": "FidoJob",
  "category": "FR",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.57 20.49 L 5.93 18.47 L 3.36 9.98 L 9.43 3.51 L 18.07 5.53 L 20.64 14.02 Z"
      }
    ]
  ]
};

export const FidoJob = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.57 20.49 L 5.93 18.47 L 3.36 9.98 L 9.43 3.51 L 18.07 5.53 L 20.64 14.02 Z" />
      {children}
    </svg>
  );
});

export default FidoJob;
