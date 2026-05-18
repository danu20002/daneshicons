import React from 'react';

export const iconData = {
  id: "Shrub",
  name: "Shrub",
  category: "S",
  nodes: [["path",{"d":"M12 22v-5.172a2 2 0 0 0-.586-1.414L9.5 13.5"}],["path",{"d":"M14.5 14.5 12 17"}],["path",{"d":"M17 8.8A6 6 0 0 1 13.8 20H10A6.5 6.5 0 0 1 7 8a5 5 0 0 1 10 0z"}]]
};

export const Shrub = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M12 22v-5.172a2 2 0 0 0-.586-1.414L9.5 13.5" />
      <path d="M14.5 14.5 12 17" />
      <path d="M17 8.8A6 6 0 0 1 13.8 20H10A6.5 6.5 0 0 1 7 8a5 5 0 0 1 10 0z" />
      {children}
    </svg>
  );
});

export default Shrub;
