const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DocsRenderer-CFRXHY34-CEoeEScz.js","./iframe-CHGnGNgx.js","./index-DEsPWUIh.js","./index-CHK4WJUA.js","./jsx-runtime-B49m8bie.js","./index-CvUaxwb9.js","./index-DJdTjTnu.js","./index-XG6mIJUL.js","./index-BdOSk9or.js","./react-18-Bo8EaXyA.js","./client-Cd3u0B9u.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./iframe-CHGnGNgx.js";
var excludeTags = Object.entries(globalThis.TAGS_OPTIONS ?? {}).reduce((acc, entry) => {
  let [tag, option] = entry;
  return option.excludeFromDocsStories && (acc[tag] = true), acc;
}, {}), parameters = { docs: { renderer: async () => {
  let { DocsRenderer } = await __vitePreload(() => import("./DocsRenderer-CFRXHY34-CEoeEScz.js").then((n) => n.D), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]) : void 0, import.meta.url);
  return new DocsRenderer();
}, stories: { filter: (story) => {
  var _a;
  return (story.tags || []).filter((tag) => excludeTags[tag]).length === 0 && !((_a = story.parameters.docs) == null ? void 0 : _a.disable);
} } } };
export {
  parameters
};
