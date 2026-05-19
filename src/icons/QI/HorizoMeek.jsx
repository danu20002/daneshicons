import React from 'react';

export const iconData = {
  "id": "HorizoMeek",
  "name": "HorizoMeek",
  "category": "QI",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.39 12.54 L 6.83 19.86 L 7.78 3.60 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.87 14.43 L 6.96 15.87 L 11.17 5.70 Z"
      }
    ]
  ]
};

export const HorizoMeek = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.39 12.54 L 6.83 19.86 L 7.78 3.60 Z" />
      <path d="M 17.87 14.43 L 6.96 15.87 L 11.17 5.70 Z" />
      {children}
    </svg>
  );
});

export default HorizoMeek;
