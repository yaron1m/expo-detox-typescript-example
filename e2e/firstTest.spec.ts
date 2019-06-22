import {by, element, expect} from 'detox';
import {reloadApp} from "detox-expo-helpers";

describe('Authentication tests', () => {
    beforeEach(async () => {
        await reloadApp();
    });

    it('should change the text when buttons are pressed', async () => {
        await expect(element(by.id("MainText"))).toExist();
        await expect(element(by.label("Press a button to start"))).toBeVisible();

        await element(by.id("FirstButton")).tap();
        await expect(element(by.label("First button pressed!"))).toBeVisible();

        await element(by.id("SecondButton")).tap();
        await expect(element(by.label("Second button pressed!"))).toBeVisible();

        await element(by.id("FirstButton")).tap();
        await expect(element(by.label("First button pressed!"))).toBeVisible();
    });
});