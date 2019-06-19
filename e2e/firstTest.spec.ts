import {by, element, expect} from 'detox';
import {reloadApp} from "detox-expo-helpers";

describe('Authentication tests', () => {
    beforeEach(async () => {
        await reloadApp();
    });

    it('should show the default text', async () => {
        await expect(element(by.id("MainText"))).toExist();
        await expect(element(by.label("Press a button to start"))).toBeVisible();
    });
});