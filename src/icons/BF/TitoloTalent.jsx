import React from 'react';

export const iconData = {
  "id": "TitoloTalent",
  "name": "TitoloTalent",
  "category": "BF",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.07 15.51 L 4.50 6.02 L 13.42 2.51 L 20.93 8.49 L 19.50 17.98 L 10.58 21.49 Z"
      }
    ]
  ]
};

export const TitoloTalent = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.07 15.51 L 4.50 6.02 L 13.42 2.51 L 20.93 8.49 L 19.50 17.98 L 10.58 21.49 Z" />
      {children}
    </svg>
  );
});

export default TitoloTalent;
