class ProductPage {

    constructor(page) {
        this.page = page;
    }

    async addItemsTocart(items) {

        console.log(items);
        for (const item of items) {
            console.log(`item is ${item}`);
            this.itemlocator = this.page.locator(`[data-test="add-to-cart-sauce-labs-${item}"]`);

            await this.itemlocator.waitFor({ state: 'visible' });
            await this.itemlocator.click();
        }

    }

}

export default ProductPage;