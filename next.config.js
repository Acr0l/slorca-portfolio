module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/404": { page: "/404" },
      "/project/trm": { page: "/project/trm" },
      "/project/duam-talks": { page: "/project/duam-talks" },
      "/project/kimm": { page: "/project/kimm" },
      "/project/lookation": { page: "/project/lookation" },
      "/project/personal-blog": { page: "/project/personal-blog" },
      "/project/quantum-computing": { page: "/project/quantum-computing" },
      "/project/robotics": { page: "/project/robotics" },
    };
  },
};
