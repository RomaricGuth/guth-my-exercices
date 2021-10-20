import {my_display_alpha} from "./exercice-1.js";

export const my_display_alpha_reverse = () => {
    const alpha = my_display_alpha();
    let alpha_reverse = '';
    for (let i = alpha.length - 1; i >= 0; i--) {
        alpha_reverse += alpha[i];
    }
    return alpha_reverse;
}
