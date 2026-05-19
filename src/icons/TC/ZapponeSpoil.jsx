import React from 'react';

export const iconData = {
  "id": "ZapponeSpoil",
  "name": "ZapponeSpoil",
  "category": "TC",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.58 L 2.50 11.27 L 3.00 13.54 L 3.50 13.54 L 4.00 11.27 L 4.50 7.58 L 5.00 3.89 L 5.50 1.62 L 6.00 1.62 L 6.50 3.89 L 7.00 7.58 L 7.50 11.27 L 8.00 13.54 L 8.50 13.54 L 9.00 11.27 L 9.50 7.58 L 10.00 3.89 L 10.50 1.62 L 11.00 1.62 L 11.50 3.89 L 12.00 7.58 L 12.50 11.27 L 13.00 13.54 L 13.50 13.54 L 14.00 11.27 L 14.50 7.58 L 15.00 3.89 L 15.50 1.62 L 16.00 1.62 L 16.50 3.89 L 17.00 7.58 L 17.50 11.27 L 18.00 13.54 L 18.50 13.54 L 19.00 11.27 L 19.50 7.58 L 20.00 3.89 L 20.50 1.62 L 21.00 1.62 L 21.50 3.89 L 22.00 7.58"
      }
    ]
  ]
};

export const ZapponeSpoil = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.58 L 2.50 11.27 L 3.00 13.54 L 3.50 13.54 L 4.00 11.27 L 4.50 7.58 L 5.00 3.89 L 5.50 1.62 L 6.00 1.62 L 6.50 3.89 L 7.00 7.58 L 7.50 11.27 L 8.00 13.54 L 8.50 13.54 L 9.00 11.27 L 9.50 7.58 L 10.00 3.89 L 10.50 1.62 L 11.00 1.62 L 11.50 3.89 L 12.00 7.58 L 12.50 11.27 L 13.00 13.54 L 13.50 13.54 L 14.00 11.27 L 14.50 7.58 L 15.00 3.89 L 15.50 1.62 L 16.00 1.62 L 16.50 3.89 L 17.00 7.58 L 17.50 11.27 L 18.00 13.54 L 18.50 13.54 L 19.00 11.27 L 19.50 7.58 L 20.00 3.89 L 20.50 1.62 L 21.00 1.62 L 21.50 3.89 L 22.00 7.58" />
      {children}
    </svg>
  );
});

export default ZapponeSpoil;
