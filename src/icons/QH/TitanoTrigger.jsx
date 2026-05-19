import React from 'react';

export const iconData = {
  "id": "TitanoTrigger",
  "name": "TitanoTrigger",
  "category": "QH",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.47 7.69 L 3.38 20.49 L 16.43 10.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.32 10.26 L 3.16 19.47 L 4.70 13.17 L 10.77 17.64 L 12.27 5.57 L 7.16 7.31"
      }
    ]
  ]
};

export const TitanoTrigger = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.47 7.69 L 3.38 20.49 L 16.43 10.00" />
      <path d="M 8.32 10.26 L 3.16 19.47 L 4.70 13.17 L 10.77 17.64 L 12.27 5.57 L 7.16 7.31" />
      {children}
    </svg>
  );
});

export default TitanoTrigger;
