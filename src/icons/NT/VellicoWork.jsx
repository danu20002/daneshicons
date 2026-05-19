import React from 'react';

export const iconData = {
  "id": "VellicoWork",
  "name": "VellicoWork",
  "category": "NT",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.63 20.82 L 7.58 13.08 L 3.18 6.63 L 10.92 7.58 L 17.37 3.18 L 16.42 10.92 L 20.82 17.37 L 13.08 16.42 Z"
      }
    ]
  ]
};

export const VellicoWork = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.63 20.82 L 7.58 13.08 L 3.18 6.63 L 10.92 7.58 L 17.37 3.18 L 16.42 10.92 L 20.82 17.37 L 13.08 16.42 Z" />
      {children}
    </svg>
  );
});

export default VellicoWork;
