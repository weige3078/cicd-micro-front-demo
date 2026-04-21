let setCountRef: ((updater: (prev: number) => number) => void) | null = null;

export function bindHostCountSetter(
  setter: (updater: (prev: number) => number) => void,
) {
  setCountRef = setter;
}

export function incHostCount() {
  setCountRef?.((prev) => prev + 1);
}

