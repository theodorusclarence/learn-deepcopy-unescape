import { unescape } from 'html-escaper';
import cloneDeepWith from 'lodash/cloneDeepWith';

export function unescapeHtml<T>(before: T): T {
  return cloneDeepWith(before, (value) =>
    typeof value === 'string' ? unescape(value) : undefined
  );
}
