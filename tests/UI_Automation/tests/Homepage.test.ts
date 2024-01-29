import {test, expect} from '@playwright/test';

// import package.json 
import pkg from "../../../package.json";

test('test', async ({page}) => {
  await page.goto(pkg.baseUrl);
  await page.screenshot({path: 'test.png'});
  expect(await page.title()).not.toBeNull();

});