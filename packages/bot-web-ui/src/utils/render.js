export const runUIThread = ({ startFn, endFn, runFn, timeout }) => {
    document.body.style.cursor = 'wait';
    typeof startFn === 'function' && startFn();

    setTimeout(() => {
        typeof runFn === 'function' && runFn();
        typeof endFn === 'function' && endFn();
        document.body.style.cursor = 'unset';
    }, timeout ?? 500);
};
