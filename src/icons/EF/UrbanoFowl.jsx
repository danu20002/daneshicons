import React from 'react';

export const iconData = {
  "id": "UrbanoFowl",
  "name": "UrbanoFowl",
  "category": "EF",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.71 18.07 L 8.61 21.21 L 2.20 11.62 L 9.33 2.56 L 20.15 6.54 Z"
      }
    ]
  ]
};

export const UrbanoFowl = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.71 18.07 L 8.61 21.21 L 2.20 11.62 L 9.33 2.56 L 20.15 6.54 Z" />
      {children}
    </svg>
  );
});

export default UrbanoFowl;
