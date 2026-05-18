import React from 'react';

export const iconData = {
  id: "ZodiacCancer",
  name: "ZodiacCancer",
  category: "Z",
  nodes: [["path",{"d":"M21 14.5A9 6.5 0 0 1 5.5 19"}],["path",{"d":"M3 9.5A9 6.5 0 0 1 18.5 5"}],["circle",{"cx":"17.5","cy":"14.5","r":"3.5"}],["circle",{"cx":"6.5","cy":"9.5","r":"3.5"}]]
};

export const ZodiacCancer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M21 14.5A9 6.5 0 0 1 5.5 19" />
      <path d="M3 9.5A9 6.5 0 0 1 18.5 5" />
      <circle cx="17.5" cy="14.5" r="3.5" />
      <circle cx="6.5" cy="9.5" r="3.5" />
      {children}
    </svg>
  );
});

export default ZodiacCancer;
