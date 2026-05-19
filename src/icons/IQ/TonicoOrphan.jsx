import React from 'react';

export const iconData = {
  "id": "TonicoOrphan",
  "name": "TonicoOrphan",
  "category": "IQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.03 15.31 L 15.14 14.89 L 16.04 20.73 L 12.17 16.27 L 8.69 21.03 L 9.11 15.14 L 3.27 16.04 L 7.73 12.17 L 2.97 8.69 L 8.86 9.11 L 7.96 3.27 L 11.83 7.73 L 15.31 2.97 L 14.89 8.86 L 20.73 7.96 L 16.27 11.83 Z"
      }
    ]
  ]
};

export const TonicoOrphan = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.03 15.31 L 15.14 14.89 L 16.04 20.73 L 12.17 16.27 L 8.69 21.03 L 9.11 15.14 L 3.27 16.04 L 7.73 12.17 L 2.97 8.69 L 8.86 9.11 L 7.96 3.27 L 11.83 7.73 L 15.31 2.97 L 14.89 8.86 L 20.73 7.96 L 16.27 11.83 Z" />
      {children}
    </svg>
  );
});

export default TonicoOrphan;
