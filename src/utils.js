export function delay(ms) {
    new Promise((reselve) => setTimeout(reselve, ms))
}