import React from 'react';

export const iconData = {
  "id": "IcosaTomato",
  "name": "IcosaTomato",
  "category": "LN",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.20 15.26 L 3.97 7.15 L 10.79 2.69 L 18.52 5.25 L 21.35 12.89 L 17.13 19.86 L 9.06 20.91 Z"
      }
    ]
  ]
};

export const IcosaTomato = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.20 15.26 L 3.97 7.15 L 10.79 2.69 L 18.52 5.25 L 21.35 12.89 L 17.13 19.86 L 9.06 20.91 Z" />
      {children}
    </svg>
  );
});

export default IcosaTomato;
