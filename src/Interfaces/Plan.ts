export interface plan {
    plan: string,
    cost: Array<{
        price: string
    }>
    add_ons: Array<{
        selected: string,
        price: object
    }>
}