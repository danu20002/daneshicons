import React from 'react';

export const iconData = {
  "id": "TitanoConcept",
  "name": "TitanoConcept",
  "category": "UF",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.10 3.05 L 19.69 7.28 L 20.48 15.07 L 14.89 20.54 L 7.12 19.59 L 3.03 12.91 L 5.69 5.56 Z"
      }
    ]
  ]
};

export const TitanoConcept = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.10 3.05 L 19.69 7.28 L 20.48 15.07 L 14.89 20.54 L 7.12 19.59 L 3.03 12.91 L 5.69 5.56 Z" />
      {children}
    </svg>
  );
});

export default TitanoConcept;
