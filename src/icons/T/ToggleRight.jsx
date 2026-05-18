import React from 'react';

export const iconData = {
  id: "ToggleRight",
  name: "ToggleRight",
  category: "T",
  nodes: [["circle",{"cx":"15","cy":"12","r":"3"}],["rect",{"width":"20","height":"14","x":"2","y":"5","rx":"7"}]]
};

export const ToggleRight = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="15" cy="12" r="3" />
      <rect width="20" height="14" x="2" y="5" rx="7" />
      {children}
    </svg>
  );
});

export default ToggleRight;
