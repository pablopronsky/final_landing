export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export const staggerParent = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14 },
  },
};
