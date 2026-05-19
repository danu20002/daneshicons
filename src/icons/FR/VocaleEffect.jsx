import React from 'react';

export const iconData = {
  "id": "VocaleEffect",
  "name": "VocaleEffect",
  "category": "FR",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.07 5.77 L 12.54 2.70 L 19.61 6.63 L 20.95 14.60 L 15.54 20.62 L 7.47 20.14 L 2.81 13.54 Z"
      }
    ]
  ]
};

export const VocaleEffect = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.07 5.77 L 12.54 2.70 L 19.61 6.63 L 20.95 14.60 L 15.54 20.62 L 7.47 20.14 L 2.81 13.54 Z" />
      {children}
    </svg>
  );
});

export default VocaleEffect;
