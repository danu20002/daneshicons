import React from 'react';

export const iconData = {
  "id": "SigmoGreat",
  "name": "SigmoGreat",
  "category": "QP",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.66 2.65 L 21.43 9.63 L 18.76 18.98 L 9.34 21.35 L 2.57 14.37 L 5.24 5.02 Z"
      }
    ]
  ]
};

export const SigmoGreat = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.66 2.65 L 21.43 9.63 L 18.76 18.98 L 9.34 21.35 L 2.57 14.37 L 5.24 5.02 Z" />
      {children}
    </svg>
  );
});

export default SigmoGreat;
