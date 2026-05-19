import React from 'react';

export const iconData = {
  "id": "VinoTransfer",
  "name": "VinoTransfer",
  "category": "T",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.37 11.34 L 12.66 3.37 L 20.63 12.66 L 11.34 20.63 Z"
      }
    ]
  ]
};

export const VinoTransfer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.37 11.34 L 12.66 3.37 L 20.63 12.66 L 11.34 20.63 Z" />
      {children}
    </svg>
  );
});

export default VinoTransfer;
