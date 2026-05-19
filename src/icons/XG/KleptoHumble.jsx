import React from 'react';

export const iconData = {
  "id": "KleptoHumble",
  "name": "KleptoHumble",
  "category": "XG",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.13 11.42 L 7.12 9.63 L 5.43 4.61 L 10.22 6.88 L 12.58 2.13 L 14.37 7.12 L 19.39 5.43 L 17.12 10.22 L 21.87 12.58 L 16.88 14.37 L 18.57 19.39 L 13.78 17.12 L 11.42 21.87 L 9.63 16.88 L 4.61 18.57 L 6.88 13.78 Z"
      }
    ]
  ]
};

export const KleptoHumble = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.13 11.42 L 7.12 9.63 L 5.43 4.61 L 10.22 6.88 L 12.58 2.13 L 14.37 7.12 L 19.39 5.43 L 17.12 10.22 L 21.87 12.58 L 16.88 14.37 L 18.57 19.39 L 13.78 17.12 L 11.42 21.87 L 9.63 16.88 L 4.61 18.57 L 6.88 13.78 Z" />
      {children}
    </svg>
  );
});

export default KleptoHumble;
