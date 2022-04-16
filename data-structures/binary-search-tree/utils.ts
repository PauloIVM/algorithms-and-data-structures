export enum COMPARE_RESULT {
    LEFT_LESS_THAN_RIGTH = -1,
    EQUAL = 0,
    RIGHT_LESS_THAN_LEFT = 1,
}

export function defaultCompareFunction<T>(leftKey: T, rightKey: T): -1 | 0 | 1 {
    if (leftKey < rightKey) return COMPARE_RESULT.LEFT_LESS_THAN_RIGTH;
    if (rightKey < leftKey) return COMPARE_RESULT.RIGHT_LESS_THAN_LEFT;
    return COMPARE_RESULT.EQUAL;
}
