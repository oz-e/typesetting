import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
// 1. Import your SVG wake-up script as raw browser text
import svgWakeScript from "./quartz/util/wake-svg.inline.ts" 

const config = await loadQuartzConfig()
export default config

const loadedLayout = await loadQuartzLayout()

// 2. Attach the script to run after Quartz 5 mounts the DOM framework globally
if (loadedLayout.pageFrame) {
  loadedLayout.pageFrame.afterDOMLoaded = svgWakeScript
}

export const layout = loadedLayout
