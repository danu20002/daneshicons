import React from 'react';

export const iconData = {
  "id": "StochoLoop",
  "name": "StochoLoop",
  "category": "GD",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.91 2.99 L 12.34 10.19 L 7.06 17.99 L 18.66 7.62 L 21.00 11.89 L 14.42 20.70"
      }
    ],
    [
      "circle",
      {
        "cx": "21.91",
        "cy": "2.99",
        "r": "1.10"
      }
    ],
    [
      "circle",
      {
        "cx": "12.34",
        "cy": "10.19",
        "r": "1.09"
      }
    ],
    [
      "circle",
      {
        "cx": "7.06",
        "cy": "17.99",
        "r": "1.36"
      }
    ],
    [
      "circle",
      {
        "cx": "18.66",
        "cy": "7.62",
        "r": "0.78"
      }
    ],
    [
      "circle",
      {
        "cx": "21.00",
        "cy": "11.89",
        "r": "1.03"
      }
    ],
    [
      "circle",
      {
        "cx": "14.42",
        "cy": "20.70",
        "r": "1.11"
      }
    ]
  ]
};

export const StochoLoop = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.91 2.99 L 12.34 10.19 L 7.06 17.99 L 18.66 7.62 L 21.00 11.89 L 14.42 20.70" />
      <circle cx="21.91" cy="2.99" r="1.10" />
      <circle cx="12.34" cy="10.19" r="1.09" />
      <circle cx="7.06" cy="17.99" r="1.36" />
      <circle cx="18.66" cy="7.62" r="0.78" />
      <circle cx="21.00" cy="11.89" r="1.03" />
      <circle cx="14.42" cy="20.70" r="1.11" />
      {children}
    </svg>
  );
});

export default StochoLoop;
