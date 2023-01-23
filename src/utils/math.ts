export function formatPrice(price: number) {
    return Math.round(price * 10) / 10 + '0';
}
