import React from 'react';

export const iconData = {
  "id": "IllumiJudge",
  "name": "IllumiJudge",
  "category": "AO",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.63 6.00 L 10.97 3.31 L 16.80 4.68 L 20.38 9.48 L 20.04 15.46 L 15.94 19.81 L 9.99 20.52 L 4.99 17.23 L 3.27 11.50 Z"
      }
    ]
  ]
};

export const IllumiJudge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.63 6.00 L 10.97 3.31 L 16.80 4.68 L 20.38 9.48 L 20.04 15.46 L 15.94 19.81 L 9.99 20.52 L 4.99 17.23 L 3.27 11.50 Z" />
      {children}
    </svg>
  );
});

export default IllumiJudge;
