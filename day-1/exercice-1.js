export const my_display_alpha = () => {
    const alpha = new Array(26).fill(0).reduce((acc, _, index) =>
        acc + String.fromCharCode(index + 97), "");
    return alpha;
}
