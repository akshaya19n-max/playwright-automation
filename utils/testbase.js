
import base from '@playwright/test';



customtest = base.test.extend(
    {
        testDataForOrder: {
            username: "anshika@gmail.com",
            password: "Iamking@000",
            productName: "ADIDAS ORIGINAL"

        }

    }
)

export default customtest;



