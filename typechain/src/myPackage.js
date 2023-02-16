// 이제 ts와 같은 작업을 할 수 있다.
//@ts-check
/**
 * initializes the project
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns {void}
 */
export function init(config) {
  return true;
}
export function exit(code) {
  return code + 1;
}
// js지만 ts는 이게 뭔지 모름.
