import React from 'react';

export const iconData = {
  "id": "IcosaPiston",
  "name": "IcosaPiston",
  "category": "OK",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.98 2.79 L 19.91 6.89 L 21.21 13.98 L 17.11 19.91 L 10.02 21.21 L 4.09 17.11 L 2.79 10.02 L 6.89 4.09 Z"
      }
    ]
  ]
};

export const IcosaPiston = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.98 2.79 L 19.91 6.89 L 21.21 13.98 L 17.11 19.91 L 10.02 21.21 L 4.09 17.11 L 2.79 10.02 L 6.89 4.09 Z" />
      {children}
    </svg>
  );
});

export default IcosaPiston;
