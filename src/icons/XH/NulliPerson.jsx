import React from 'react';

export const iconData = {
  "id": "NulliPerson",
  "name": "NulliPerson",
  "category": "XH",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.80 21.75 L 7.49 12.95 L 5.15 4.36 L 13.43 7.62 L 22.04 9.89 L 15.07 15.43 Z"
      }
    ]
  ]
};

export const NulliPerson = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.80 21.75 L 7.49 12.95 L 5.15 4.36 L 13.43 7.62 L 22.04 9.89 L 15.07 15.43 Z" />
      {children}
    </svg>
  );
});

export default NulliPerson;
