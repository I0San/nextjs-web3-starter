import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    // Ignore test files and other non-code files in node_modules
    config.module = config.module || {}
    config.module.rules = config.module.rules || []
    
    config.module.rules.push({
      test: /\.(test|spec)\.(ts|tsx|js|jsx)$/,
      include: /node_modules/,
      use: 'ignore-loader',
    })
    
    // Ignore markdown and other non-code files in node_modules
    config.module.rules.push({
      test: /\.(md|zip|txt)$/,
      include: /node_modules/,
      use: 'ignore-loader',
    })
    
    // Exclude test directories from resolution
    config.resolve = config.resolve || {}
    config.resolve.alias = config.resolve.alias || {}
    
    return config
  },
  // Exclude problematic packages from transpilation
  transpilePackages: [],
};

export default nextConfig;
