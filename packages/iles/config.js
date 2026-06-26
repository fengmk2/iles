// NOTE: This helper file allows to provide it as a config path to Vite or
// Vitest without using the iles executable.
export default async (env, root = process.cwd()) => {
  const {
    default: IslandsPlugins,
    resolveConfig,
    mergeConfig,
  } = await import('./dist/node/index.mjs')

  const config = await resolveConfig(root)

  return mergeConfig(config.vite, {
    plugins: IslandsPlugins(config),
    // vite-plus only resolves TypeScript `paths` aliases (e.g. @node/*, @client/*)
    // when this is enabled; it defaults to false. Required for the spec files.
    resolve: { tsconfigPaths: true },
  })
}
