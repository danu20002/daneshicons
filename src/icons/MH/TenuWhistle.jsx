import React from 'react';

export const iconData = {
  "id": "TenuWhistle",
  "name": "TenuWhistle",
  "category": "MH",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.04 5.62 L 10.28 8.31 L 11.59 2.57 L 13.39 8.18 L 18.38 5.04 L 15.69 10.28 L 21.43 11.59 L 15.82 13.39 L 18.96 18.38 L 13.72 15.69 L 12.41 21.43 L 10.61 15.82 L 5.62 18.96 L 8.31 13.72 L 2.57 12.41 L 8.18 10.61 Z"
      }
    ]
  ]
};

export const TenuWhistle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.04 5.62 L 10.28 8.31 L 11.59 2.57 L 13.39 8.18 L 18.38 5.04 L 15.69 10.28 L 21.43 11.59 L 15.82 13.39 L 18.96 18.38 L 13.72 15.69 L 12.41 21.43 L 10.61 15.82 L 5.62 18.96 L 8.31 13.72 L 2.57 12.41 L 8.18 10.61 Z" />
      {children}
    </svg>
  );
});

export default TenuWhistle;
