import React from 'react';

export const iconData = {
  "id": "ValicoThread",
  "name": "ValicoThread",
  "category": "RH",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.92 9.19 L 18.47 6.41 L 13.61 20.40 Z"
      }
    ]
  ]
};

export const ValicoThread = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.92 9.19 L 18.47 6.41 L 13.61 20.40 Z" />
      {children}
    </svg>
  );
});

export default ValicoThread;
