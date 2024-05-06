// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<F extends (...args: any[]) => void>(
    func: F,
    waitFor: number,
) {
    let timeoutId: number | undefined;

    return function (this: ThisParameterType<F>, ...args: Parameters<F>) {
        clearTimeout(timeoutId);
        timeoutId = window.setTimeout(() => func.apply(this, args), waitFor);
    } as F;
}

