import React from 'react';

export const iconData = {
  "id": "VastoFleece",
  "name": "VastoFleece",
  "category": "EY",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.15 14.87 L 4.14 9.16 L 7.81 4.77 L 13.43 3.77 L 18.39 6.62 L 20.36 11.98 L 18.41 17.36 L 13.47 20.23 L 7.84 19.24 Z"
      }
    ]
  ]
};

export const VastoFleece = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.15 14.87 L 4.14 9.16 L 7.81 4.77 L 13.43 3.77 L 18.39 6.62 L 20.36 11.98 L 18.41 17.36 L 13.47 20.23 L 7.84 19.24 Z" />
      {children}
    </svg>
  );
});

export default VastoFleece;
